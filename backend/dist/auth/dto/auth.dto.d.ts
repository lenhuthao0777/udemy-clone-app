import { Role } from '../../common/decorators/roles.decorator';
export declare class RegisterDto {
    username: string;
    password: string;
    fullName: string;
    email: string;
    phone?: string;
    role?: Role;
}
export declare class LoginDto {
    username: string;
    password: string;
}
export declare class RefreshTokenDto {
    refreshToken: string;
}
