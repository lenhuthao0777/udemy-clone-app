import { BaseEntity } from '../../common/entities/base.entity';
import { Order } from './order.entity';
import { Course } from '../../courses/entities/course.entity';
export declare class OrderItem extends BaseEntity {
    orderId: string;
    order: Order;
    courseId: string;
    course: Course;
    price: number;
}
