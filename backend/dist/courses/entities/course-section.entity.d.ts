import { BaseEntity } from '../../common/entities/base.entity';
import { Course } from './course.entity';
import { Lesson } from './lesson.entity';
export declare class CourseSection extends BaseEntity {
    title: string;
    order: number;
    courseId: string;
    course: Course;
    lessons: Lesson[];
}
