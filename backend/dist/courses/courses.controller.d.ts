import { CoursesService } from './courses.service';
import { CreateCourseDto, UpdateCourseDto, QueryCoursesDto } from './dto/course.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    findAll(pagination: PaginationDto, query: QueryCoursesDto): Promise<{
        data: import("./entities/course.entity").Course[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        data: import("./entities/course.entity").Course;
    }>;
    create(dto: CreateCourseDto, req: {
        user: {
            id: string;
        };
    }, file?: Express.Multer.File): Promise<{
        data: import("./entities/course.entity").Course;
    }>;
    update(id: string, dto: UpdateCourseDto, file?: Express.Multer.File): Promise<{
        data: import("./entities/course.entity").Course;
    }>;
    remove(id: string): Promise<{
        data: {
            message: string;
        };
    }>;
    getSections(courseId: string): Promise<{
        data: import("./entities/course-section.entity").CourseSection[];
    }>;
    createSection(courseId: string, title: string): Promise<{
        data: import("./entities/course-section.entity").CourseSection;
    }>;
    deleteSection(sectionId: string): Promise<{
        data: {
            message: string;
        };
    }>;
}
