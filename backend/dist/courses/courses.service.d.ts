import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { CourseSection } from './entities/course-section.entity';
import { PaginationDto } from '../common/dto/pagination.dto';
import { CreateCourseDto, UpdateCourseDto, QueryCoursesDto } from './dto/course.dto';
export declare class CoursesService {
    private courseRepo;
    private sectionRepo;
    constructor(courseRepo: Repository<Course>, sectionRepo: Repository<CourseSection>);
    findAll(pagination: PaginationDto, query: QueryCoursesDto): Promise<{
        data: Course[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        data: Course;
    }>;
    create(dto: CreateCourseDto, instructorId: string, thumbnail?: string): Promise<{
        data: Course;
    }>;
    update(id: string, dto: UpdateCourseDto, thumbnail?: string): Promise<{
        data: Course;
    }>;
    remove(id: string): Promise<{
        data: {
            message: string;
        };
    }>;
    getSections(courseId: string): Promise<{
        data: CourseSection[];
    }>;
    createSection(courseId: string, title: string): Promise<{
        data: CourseSection;
    }>;
    deleteSection(id: string): Promise<{
        data: {
            message: string;
        };
    }>;
}
