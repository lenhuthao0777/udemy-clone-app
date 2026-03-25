import { Role } from '../../common/decorators/roles.decorator';
export declare class UpdateUserDto {
    fullName?: string;
    email?: string;
    phone?: string;
    avatar?: string;
    role?: Role;
    groupCode?: string;
}
