import { Repository } from 'typeorm';
import { Enrollment } from './entities/enrollment.entity';
import { Course } from '../courses/entities/course.entity';
export declare class EnrollmentsService {
    private enrollRepo;
    private courseRepo;
    constructor(enrollRepo: Repository<Enrollment>, courseRepo: Repository<Course>);
    enroll(userId: string, courseId: string): Promise<{
        data: Enrollment;
    }>;
    findMyEnrollments(userId: string): Promise<{
        data: Enrollment[];
    }>;
    findAll(): Promise<{
        data: Enrollment[];
    }>;
    updateProgress(id: string, progress: number): Promise<{
        data: Enrollment;
    }>;
    remove(id: string): Promise<{
        data: {
            message: string;
        };
    }>;
}
