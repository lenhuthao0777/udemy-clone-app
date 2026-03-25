import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, RefreshTokenDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
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
    login(dto: LoginDto): Promise<{
        data: {
            user: {
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
            accessToken: string;
            refreshToken: string;
        };
    }>;
    refresh(dto: RefreshTokenDto): Promise<{
        data: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
}
