import { BaseEntity } from '../../common/entities/base.entity';
export declare class Coupon extends BaseEntity {
    code: string;
    discountPercent: number;
    maxUses: number;
    usedCount: number;
    expiresAt: Date;
    isActive: boolean;
}
