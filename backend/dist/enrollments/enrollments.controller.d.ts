import { EnrollmentsService } from './enrollments.service';
export declare class EnrollmentsController {
    private readonly svc;
    constructor(svc: EnrollmentsService);
    enroll(req: {
        user: {
            id: string;
        };
    }, courseId: string): Promise<{
        data: import("./entities/enrollment.entity").Enrollment;
    }>;
    findMe(req: {
        user: {
            id: string;
        };
    }): Promise<{
        data: import("./entities/enrollment.entity").Enrollment[];
    }>;
    findAll(): Promise<{
        data: import("./entities/enrollment.entity").Enrollment[];
    }>;
    updateProgress(id: string, progress: number): Promise<{
        data: import("./entities/enrollment.entity").Enrollment;
    }>;
    remove(id: string): Promise<{
        data: {
            message: string;
        };
    }>;
}
