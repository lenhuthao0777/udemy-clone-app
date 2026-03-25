"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const courses_module_1 = require("./courses/courses.module");
const categories_module_1 = require("./categories/categories.module");
const enrollments_module_1 = require("./enrollments/enrollments.module");
const orders_module_1 = require("./orders/orders.module");
const reviews_module_1 = require("./reviews/reviews.module");
const wishlist_module_1 = require("./wishlist/wishlist.module");
const coupons_module_1 = require("./coupons/coupons.module");
const health_module_1 = require("./health/health.module");
const user_entity_1 = require("./users/entities/user.entity");
const course_entity_1 = require("./courses/entities/course.entity");
const category_entity_1 = require("./categories/entities/category.entity");
const course_section_entity_1 = require("./courses/entities/course-section.entity");
const lesson_entity_1 = require("./courses/entities/lesson.entity");
const enrollment_entity_1 = require("./enrollments/entities/enrollment.entity");
const order_entity_1 = require("./orders/entities/order.entity");
const order_item_entity_1 = require("./orders/entities/order-item.entity");
const review_entity_1 = require("./reviews/entities/review.entity");
const wishlist_entity_1 = require("./wishlist/entities/wishlist.entity");
const coupon_entity_1 = require("./coupons/entities/coupon.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    type: 'postgres',
                    host: config.get('DB_HOST', 'localhost'),
                    port: config.get('DB_PORT', 5432),
                    username: config.get('DB_USERNAME', 'elearning'),
                    password: config.get('DB_PASSWORD', 'elearning_secret'),
                    database: config.get('DB_NAME', 'elearning_db'),
                    entities: [
                        user_entity_1.User, course_entity_1.Course, category_entity_1.Category, course_section_entity_1.CourseSection, lesson_entity_1.Lesson,
                        enrollment_entity_1.Enrollment, order_entity_1.Order, order_item_entity_1.OrderItem, review_entity_1.Review, wishlist_entity_1.Wishlist, coupon_entity_1.Coupon,
                    ],
                    synchronize: config.get('NODE_ENV') !== 'production',
                    logging: config.get('NODE_ENV') === 'development',
                }),
            }),
            health_module_1.HealthModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            courses_module_1.CoursesModule,
            categories_module_1.CategoriesModule,
            enrollments_module_1.EnrollmentsModule,
            orders_module_1.OrdersModule,
            reviews_module_1.ReviewsModule,
            wishlist_module_1.WishlistModule,
            coupons_module_1.CouponsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map