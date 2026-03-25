import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coupon } from './entities/coupon.entity';

export class CreateCouponDto {
  code: string;
  discountPercent: number;
  maxUses?: number;
  expiresAt?: Date;
}

@Injectable()
export class CouponsService {
  constructor(@InjectRepository(Coupon) private couponRepo: Repository<Coupon>) {}

  async findAll() {
    const coupons = await this.couponRepo.find();
    return { data: coupons };
  }

  async create(dto: CreateCouponDto) {
    const coupon = this.couponRepo.create({ ...dto, isActive: true });
    await this.couponRepo.save(coupon);
    return { data: coupon };
  }

  async update(id: string, dto: Partial<CreateCouponDto>) {
    const coupon = await this.couponRepo.findOne({ where: { id } });
    if (!coupon) throw new NotFoundException('Coupon not found');
    Object.assign(coupon, dto);
    await this.couponRepo.save(coupon);
    return { data: coupon };
  }

  async remove(id: string) {
    const coupon = await this.couponRepo.findOne({ where: { id } });
    if (!coupon) throw new NotFoundException('Coupon not found');
    await this.couponRepo.remove(coupon);
    return { data: { message: 'Coupon deleted' } };
  }
}
