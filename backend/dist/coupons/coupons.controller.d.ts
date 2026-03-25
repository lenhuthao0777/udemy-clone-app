import { CouponsService, CreateCouponDto } from './coupons.service';
export declare class CouponsController {
    private readonly svc;
    constructor(svc: CouponsService);
    findAll(): Promise<{
        data: import("./entities/coupon.entity").Coupon[];
    }>;
    create(dto: CreateCouponDto): Promise<{
        data: import("./entities/coupon.entity").Coupon;
    }>;
    update(id: string, dto: Partial<CreateCouponDto>): Promise<{
        data: import("./entities/coupon.entity").Coupon;
    }>;
    remove(id: string): Promise<{
        data: {
            message: string;
        };
    }>;
}
