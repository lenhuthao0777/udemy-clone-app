import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { CategoriesModule } from './categories/categories.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { OrdersModule } from './orders/orders.module';
import { ReviewsModule } from './reviews/reviews.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CouponsModule } from './coupons/coupons.module';
import { HealthModule } from './health/health.module';
import { User } from './users/entities/user.entity';
import { Course } from './courses/entities/course.entity';
import { Category } from './categories/entities/category.entity';
import { CourseSection } from './courses/entities/course-section.entity';
import { Lesson } from './courses/entities/lesson.entity';
import { Enrollment } from './enrollments/entities/enrollment.entity';
import { Order } from './orders/entities/order.entity';
import { OrderItem } from './orders/entities/order-item.entity';
import { Review } from './reviews/entities/review.entity';
import { Wishlist } from './wishlist/entities/wishlist.entity';
import { Coupon } from './coupons/entities/coupon.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST', 'localhost'),
        port: config.get<number>('DB_PORT', 5432),
        username: config.get('DB_USERNAME', 'elearning'),
        password: config.get('DB_PASSWORD', 'elearning_secret'),
        database: config.get('DB_NAME', 'elearning_db'),
        entities: [
          User, Course, Category, CourseSection, Lesson,
          Enrollment, Order, OrderItem, Review, Wishlist, Coupon,
        ],
        synchronize: config.get('NODE_ENV') !== 'production',
        logging: config.get('NODE_ENV') === 'development',
      }),
    }),
    HealthModule,
    AuthModule,
    UsersModule,
    CoursesModule,
    CategoriesModule,
    EnrollmentsModule,
    OrdersModule,
    ReviewsModule,
    WishlistModule,
    CouponsModule,
  ],
})
export class AppModule {}
