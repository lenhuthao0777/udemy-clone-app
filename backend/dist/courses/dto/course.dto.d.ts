import { CourseLevel } from '../entities/course.entity';
export declare class CreateCourseDto {
    title: string;
    description?: string;
    price?: number;
    categoryId?: string;
    level?: CourseLevel;
    language?: string;
    groupCode?: string;
}
export declare class UpdateCourseDto {
    title?: string;
    description?: string;
    price?: number;
    originalPrice?: number;
    categoryId?: string;
    level?: CourseLevel;
    language?: string;
    groupCode?: string;
}
export declare class QueryCoursesDto {
    keyword?: string;
    categoryId?: string;
    groupCode?: string;
    level?: CourseLevel;
}
