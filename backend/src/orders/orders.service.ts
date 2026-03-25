import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order, OrderStatus } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Course } from '../courses/entities/course.entity';
import { Coupon } from '../coupons/entities/coupon.entity';
import { EnrollmentsService } from '../enrollments/enrollments.service';

export class CreateOrderDto {
  items: { courseId: string }[];
  couponCode?: string;
}

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(OrderItem) private itemRepo: Repository<OrderItem>,
    @InjectRepository(Course) private courseRepo: Repository<Course>,
    @InjectRepository(Coupon) private couponRepo: Repository<Coupon>,
    private enrollSvc: EnrollmentsService,
  ) {}

  async createOrder(userId: string, dto: CreateOrderDto) {
    // Validate courses
    const courses = await Promise.all(
      dto.items.map(async (item) => {
        const c = await this.courseRepo.findOne({ where: { id: item.courseId } });
        if (!c) throw new NotFoundException(`Course ${item.courseId} not found`);
        return c;
      }),
    );

    let originalPrice = courses.reduce((sum, c) => sum + Number(c.price), 0);
    let totalPrice = originalPrice;
    let couponCode: string | undefined;

    // Apply coupon
    if (dto.couponCode) {
      const coupon = await this.couponRepo.findOne({ where: { code: dto.couponCode, isActive: true } });
      if (!coupon) throw new BadRequestException('Invalid or expired coupon');
      if (coupon.expiresAt && coupon.expiresAt < new Date()) throw new BadRequestException('Coupon expired');
      if (coupon.maxUses && coupon.usedCount >= coupon.maxUses) throw new BadRequestException('Coupon usage limit reached');
      totalPrice = originalPrice * (1 - Number(coupon.discountPercent) / 100);
      couponCode = coupon.code;
      await this.couponRepo.increment({ id: coupon.id }, 'usedCount', 1);
    }

    // Create order
    const order = this.orderRepo.create({ userId, totalPrice, originalPrice, couponCode, status: OrderStatus.PAID });
    await this.orderRepo.save(order);

    // Create order items
    const items = courses.map((c) => this.itemRepo.create({ orderId: order.id, courseId: c.id, price: c.price }));
    await this.itemRepo.save(items);

    // Auto-enroll
    for (const c of courses) {
      try { await this.enrollSvc.enroll(userId, c.id); } catch { /* already enrolled */ }
    }

    return { data: { ...order, items, enrolledCourses: courses.map((c) => c.id) } };
  }

  async findAll() {
    const orders = await this.orderRepo.find({ relations: ['user', 'items'] });
    return { data: orders };
  }

  async findMyOrders(userId: string) {
    const orders = await this.orderRepo.find({ where: { userId }, relations: ['items'] });
    return { data: orders };
  }

  async findOne(id: string) {
    const order = await this.orderRepo.findOne({ where: { id }, relations: ['items', 'user'] });
    if (!order) throw new NotFoundException('Order not found');
    return { data: order };
  }

  async updateStatus(id: string, status: OrderStatus) {
    const order = await this.orderRepo.findOne({ where: { id } });
    if (!order) throw new NotFoundException('Order not found');
    order.status = status;
    await this.orderRepo.save(order);
    return { data: order };
  }

  async validateCoupon(code: string, subtotal: number) {
    const coupon = await this.couponRepo.findOne({ where: { code, isActive: true } });
    if (!coupon) throw new BadRequestException('Invalid coupon');
    const discount = subtotal * (Number(coupon.discountPercent) / 100);
    return { data: { code, discountPercent: coupon.discountPercent, discount, total: subtotal - discount } };
  }
}
