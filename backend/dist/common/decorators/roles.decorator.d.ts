export declare enum Role {
    STUDENT = "STUDENT",
    INSTRUCTOR = "INSTRUCTOR",
    ADMIN = "ADMIN"
}
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: Role[]) => import("@nestjs/common").CustomDecorator<string>;
