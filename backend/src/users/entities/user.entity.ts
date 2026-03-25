import { Entity, Column, OneToMany, BeforeInsert } from 'typeorm';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { BaseEntity } from '../../common/entities/base.entity';
import { Role } from '../../common/decorators/roles.decorator';
import { Enrollment } from '../../enrollments/entities/enrollment.entity';
import { Order } from '../../orders/entities/order.entity';
import { Review } from '../../reviews/entities/review.entity';
import { Wishlist } from '../../wishlist/entities/wishlist.entity';

@Entity('users')
export class User extends BaseEntity {
  @ApiProperty()
  @Column({ unique: true })
  username: string;

  @Exclude()
  @Column()
  password: string;

  @ApiProperty()
  @Column()
  fullName: string;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @Column({ nullable: true })
  phone: string;

  @ApiProperty()
  @Column({ nullable: true })
  avatar: string;

  @ApiProperty({ enum: Role })
  @Column({ type: 'enum', enum: Role, default: Role.STUDENT })
  role: Role;

  @ApiProperty()
  @Column({ nullable: true })
  groupCode: string;

  @OneToMany(() => Enrollment, (e) => e.user)
  enrollments: Enrollment[];

  @OneToMany(() => Order, (o) => o.user)
  orders: Order[];

  @OneToMany(() => Review, (r) => r.user)
  reviews: Review[];

  @OneToMany(() => Wishlist, (w) => w.user)
  wishlist: Wishlist[];

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 12);
    }
  }
}
