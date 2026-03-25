import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../common/entities/base.entity';
import { Order } from './order.entity';
import { Course } from '../../courses/entities/course.entity';

@Entity('order_items')
export class OrderItem extends BaseEntity {
  @Column()
  orderId: string;

  @ManyToOne(() => Order, (o) => o.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @Column()
  courseId: string;

  @ManyToOne(() => Course, { eager: true })
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
