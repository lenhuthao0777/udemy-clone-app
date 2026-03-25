import { Entity, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../common/entities/base.entity';

@Entity('coupons')
export class Coupon extends BaseEntity {
  @ApiProperty()
  @Column({ unique: true })
  code: string;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 5, scale: 2 })
  discountPercent: number;

  @ApiProperty()
  @Column({ nullable: true })
  maxUses: number;

  @ApiProperty()
  @Column({ default: 0 })
  usedCount: number;

  @ApiProperty()
  @Column({ type: 'timestamp', nullable: true })
  expiresAt: Date;

  @ApiProperty()
  @Column({ default: true })
  isActive: boolean;
}
