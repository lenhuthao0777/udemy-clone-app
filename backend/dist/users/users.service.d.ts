import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { PaginationDto } from '../common/dto/pagination.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    findAll(pagination: PaginationDto, keyword?: string): Promise<{
        data: User[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        data: {
            username: string;
            fullName: string;
            email: string;
            phone: string;
            avatar: string;
            role: import("../common/decorators/roles.decorator").Role;
            groupCode: string;
            enrollments: import("../enrollments/entities/enrollment.entity").Enrollment[];
            orders: import("../orders/entities/order.entity").Order[];
            reviews: import("../reviews/entities/review.entity").Review[];
            wishlist: import("../wishlist/entities/wishlist.entity").Wishlist[];
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    update(id: string, dto: UpdateUserDto): Promise<{
        data: {
            username: string;
            fullName: string;
            email: string;
            phone: string;
            avatar: string;
            role: import("../common/decorators/roles.decorator").Role;
            groupCode: string;
            enrollments: import("../enrollments/entities/enrollment.entity").Enrollment[];
            orders: import("../orders/entities/order.entity").Order[];
            reviews: import("../reviews/entities/review.entity").Review[];
            wishlist: import("../wishlist/entities/wishlist.entity").Wishlist[];
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    remove(id: string): Promise<{
        data: {
            message: string;
        };
    }>;
}
