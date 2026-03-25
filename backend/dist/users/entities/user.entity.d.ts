import { BaseEntity } from '../../common/entities/base.entity';
import { Role } from '../../common/decorators/roles.decorator';
import { Enrollment } from '../../enrollments/entities/enrollment.entity';
import { Order } from '../../orders/entities/order.entity';
import { Review } from '../../reviews/entities/review.entity';
import { Wishlist } from '../../wishlist/entities/wishlist.entity';
export declare class User extends BaseEntity {
    username: string;
    password: string;
    fullName: string;
    email: string;
    phone: string;
    avatar: string;
    role: Role;
    groupCode: string;
    enrollments: Enrollment[];
    orders: Order[];
    reviews: Review[];
    wishlist: Wishlist[];
    hashPassword(): Promise<void>;
}
