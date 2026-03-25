import { BaseEntity } from '../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';
import { Course } from '../../courses/entities/course.entity';
export declare class Enrollment extends BaseEntity {
    userId: string;
    user: User;
    courseId: string;
    course: Course;
    progress: number;
    enrolledAt: Date;
}
