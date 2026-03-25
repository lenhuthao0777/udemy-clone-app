"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = exports.CreateOrderDto = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
const order_item_entity_1 = require("./entities/order-item.entity");
const course_entity_1 = require("../courses/entities/course.entity");
const coupon_entity_1 = require("../coupons/entities/coupon.entity");
const enrollments_service_1 = require("../enrollments/enrollments.service");
class CreateOrderDto {
    items;
    couponCode;
}
exports.CreateOrderDto = CreateOrderDto;
let OrdersService = class OrdersService {
    orderRepo;
    itemRepo;
    courseRepo;
    couponRepo;
    enrollSvc;
    constructor(orderRepo, itemRepo, courseRepo, couponRepo, enrollSvc) {
        this.orderRepo = orderRepo;
        this.itemRepo = itemRepo;
        this.courseRepo = courseRepo;
        this.couponRepo = couponRepo;
        this.enrollSvc = enrollSvc;
    }
    async createOrder(userId, dto) {
        const courses = await Promise.all(dto.items.map(async (item) => {
            const c = await this.courseRepo.findOne({ where: { id: item.courseId } });
            if (!c)
                throw new common_1.NotFoundException(`Course ${item.courseId} not found`);
            return c;
        }));
        let originalPrice = courses.reduce((sum, c) => sum + Number(c.price), 0);
        let totalPrice = originalPrice;
        let couponCode;
        if (dto.couponCode) {
            const coupon = await this.couponRepo.findOne({ where: { code: dto.couponCode, isActive: true } });
            if (!coupon)
                throw new common_1.BadRequestException('Invalid or expired coupon');
            if (coupon.expiresAt && coupon.expiresAt < new Date())
                throw new common_1.BadRequestException('Coupon expired');
            if (coupon.maxUses && coupon.usedCount >= coupon.maxUses)
                throw new common_1.BadRequestException('Coupon usage limit reached');
            totalPrice = originalPrice * (1 - Number(coupon.discountPercent) / 100);
            couponCode = coupon.code;
            await this.couponRepo.increment({ id: coupon.id }, 'usedCount', 1);
        }
        const order = this.orderRepo.create({ userId, totalPrice, originalPrice, couponCode, status: order_entity_1.OrderStatus.PAID });
        await this.orderRepo.save(order);
        const items = courses.map((c) => this.itemRepo.create({ orderId: order.id, courseId: c.id, price: c.price }));
        await this.itemRepo.save(items);
        for (const c of courses) {
            try {
                await this.enrollSvc.enroll(userId, c.id);
            }
            catch { }
        }
        return { data: { ...order, items, enrolledCourses: courses.map((c) => c.id) } };
    }
    async findAll() {
        const orders = await this.orderRepo.find({ relations: ['user', 'items'] });
        return { data: orders };
    }
    async findMyOrders(userId) {
        const orders = await this.orderRepo.find({ where: { userId }, relations: ['items'] });
        return { data: orders };
    }
    async findOne(id) {
        const order = await this.orderRepo.findOne({ where: { id }, relations: ['items', 'user'] });
        if (!order)
            throw new common_1.NotFoundException('Order not found');
        return { data: order };
    }
    async updateStatus(id, status) {
        const order = await this.orderRepo.findOne({ where: { id } });
        if (!order)
            throw new common_1.NotFoundException('Order not found');
        order.status = status;
        await this.orderRepo.save(order);
        return { data: order };
    }
    async validateCoupon(code, subtotal) {
        const coupon = await this.couponRepo.findOne({ where: { code, isActive: true } });
        if (!coupon)
            throw new common_1.BadRequestException('Invalid coupon');
        const discount = subtotal * (Number(coupon.discountPercent) / 100);
        return { data: { code, discountPercent: coupon.discountPercent, discount, total: subtotal - discount } };
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(order_item_entity_1.OrderItem)),
    __param(2, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __param(3, (0, typeorm_1.InjectRepository)(coupon_entity_1.Coupon)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        enrollments_service_1.EnrollmentsService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map