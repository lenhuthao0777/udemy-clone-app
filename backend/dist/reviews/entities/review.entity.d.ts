import { BaseEntity } from '../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';
import { Course } from '../../courses/entities/course.entity';
export declare class Review extends BaseEntity {
    userId: string;
    user: User;
    courseId: string;
    course: Course;
    rating: number;
    comment: string;
    likes: number;
    dislikes: number;
}
