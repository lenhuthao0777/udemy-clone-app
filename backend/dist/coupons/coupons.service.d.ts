import { Repository } from 'typeorm';
import { Coupon } from './entities/coupon.entity';
export declare class CreateCouponDto {
    code: string;
    discountPercent: number;
    maxUses?: number;
    expiresAt?: Date;
}
export declare class CouponsService {
    private couponRepo;
    constructor(couponRepo: Repository<Coupon>);
    findAll(): Promise<{
        data: Coupon[];
    }>;
    create(dto: CreateCouponDto): Promise<{
        data: Coupon;
    }>;
    update(id: string, dto: Partial<CreateCouponDto>): Promise<{
        data: Coupon;
    }>;
    remove(id: string): Promise<{
        data: {
            message: string;
        };
    }>;
}
