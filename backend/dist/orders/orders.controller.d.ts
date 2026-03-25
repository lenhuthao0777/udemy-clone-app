import { OrdersService, CreateOrderDto } from './orders.service';
import { OrderStatus } from './entities/order.entity';
export declare class OrdersController {
    private readonly svc;
    constructor(svc: OrdersService);
    create(req: {
        user: {
            id: string;
        };
    }, dto: CreateOrderDto): Promise<{
        data: {
            items: import("./entities/order-item.entity").OrderItem[];
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
    findMe(req: {
        user: {
            id: string;
        };
    }): Promise<{
        data: import("./entities/order.entity").Order[];
    }>;
    findAll(): Promise<{
        data: import("./entities/order.entity").Order[];
    }>;
    findOne(id: string): Promise<{
        data: import("./entities/order.entity").Order;
    }>;
    updateStatus(id: string, status: OrderStatus): Promise<{
        data: import("./entities/order.entity").Order;
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
