import { Repository } from 'typeorm';
import { Order, OrderStatus } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Course } from '../courses/entities/course.entity';
import { Coupon } from '../coupons/entities/coupon.entity';
import { EnrollmentsService } from '../enrollments/enrollments.service';
export declare class CreateOrderDto {
    items: {
        courseId: string;
    }[];
    couponCode?: string;
}
export declare class OrdersService {
    private orderRepo;
    private itemRepo;
    private courseRepo;
    private couponRepo;
    private enrollSvc;
    constructor(orderRepo: Repository<Order>, itemRepo: Repository<OrderItem>, courseRepo: Repository<Course>, couponRepo: Repository<Coupon>, enrollSvc: EnrollmentsService);
    createOrder(userId: string, dto: CreateOrderDto): Promise<{
        data: {
            items: OrderItem[];
            enrolledCourses: string[];
            userId: string;
            user: import("../users/entities/user.entity").User;
            totalPrice: number;
            originalPrice: number;
            couponCode: string;
            status: OrderStatus;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    findAll(): Promise<{
        data: Order[];
    }>;
    findMyOrders(userId: string): Promise<{
        data: Order[];
    }>;
    findOne(id: string): Promise<{
        data: Order;
    }>;
    updateStatus(id: string, status: OrderStatus): Promise<{
        data: Order;
    }>;
    validateCoupon(code: string, subtotal: number): Promise<{
        data: {
            code: string;
            discountPercent: number;
            discount: number;
            total: number;
        };
    }>;
}
