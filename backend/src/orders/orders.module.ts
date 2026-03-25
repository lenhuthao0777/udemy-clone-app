import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Course } from '../courses/entities/course.entity';
import { Coupon } from '../coupons/entities/coupon.entity';
import { EnrollmentsModule } from '../enrollments/enrollments.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem, Course, Coupon]), EnrollmentsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
