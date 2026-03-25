import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../users/entities/user.entity';
import { LoginDto, RegisterDto } from './dto/auth.dto';
export declare class AuthService {
    private userRepo;
    private jwtService;
    private config;
    constructor(userRepo: Repository<User>, jwtService: JwtService, config: ConfigService);
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
    refreshToken(token: string): Promise<{
        data: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    private generateTokens;
}
