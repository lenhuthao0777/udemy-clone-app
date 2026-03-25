import { ReviewsService, CreateReviewDto } from './reviews.service';
export declare class ReviewsController {
    private readonly svc;
    constructor(svc: ReviewsService);
    findAll(courseId: string): Promise<{
        data: import("./entities/review.entity").Review[];
    }>;
    summary(courseId: string): Promise<{
        data: {
            averageRating: number;
            totalReviews: number;
            ratingBreakdown: Record<string, number>;
        };
    }>;
    create(courseId: string, req: {
        user: {
            id: string;
        };
    }, dto: CreateReviewDto): Promise<{
        data: import("./entities/review.entity").Review;
    }>;
    update(id: string, dto: Partial<CreateReviewDto>): Promise<{
        data: import("./entities/review.entity").Review;
    }>;
    remove(id: string): Promise<{
        data: {
            message: string;
        };
    }>;
    like(id: string): Promise<{
        data: {
            message: string;
        };
    }>;
    dislike(id: string): Promise<{
        data: {
            message: string;
        };
    }>;
}
