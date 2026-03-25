import { UsersService } from './users.service';
import { PaginationDto } from '../common/dto/pagination.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from '../common/decorators/roles.decorator';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(pagination: PaginationDto, keyword?: string): Promise<{
        data: import("./entities/user.entity").User[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
            totalPages: number;
        };
    }>;
    getMe(req: {
        user: {
            id: string;
        };
    }): Promise<{
        data: {
            username: string;
            fullName: string;
            email: string;
            phone: string;
            avatar: string;
            role: Role;
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
    findOne(id: string): Promise<{
        data: {
            username: string;
            fullName: string;
            email: string;
            phone: string;
            avatar: string;
            role: Role;
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
            role: Role;
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
