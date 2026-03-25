import { BaseEntity } from '../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';
import { Course } from '../../courses/entities/course.entity';
export declare class Wishlist extends BaseEntity {
    userId: string;
    user: User;
    courseId: string;
    course: Course;
}
