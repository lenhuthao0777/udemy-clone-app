import { BaseEntity } from '../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';
import { OrderItem } from './order-item.entity';
export declare enum OrderStatus {
    PENDING = "PENDING",
    PAID = "PAID",
    FAILED = "FAILED",
    REFUNDED = "REFUNDED"
}
export declare class Order extends BaseEntity {
    userId: string;
    user: User;
    totalPrice: number;
    originalPrice: number;
    couponCode: string;
    status: OrderStatus;
    items: OrderItem[];
}
