import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { Course } from '../courses/entities/course.entity';
export declare class CreateReviewDto {
    rating: number;
    comment?: string;
}
export declare class ReviewsService {
    private reviewRepo;
    private courseRepo;
    constructor(reviewRepo: Repository<Review>, courseRepo: Repository<Course>);
    findByCourse(courseId: string): Promise<{
        data: Review[];
    }>;
    getRatingSummary(courseId: string): Promise<{
        data: {
            averageRating: number;
            totalReviews: number;
            ratingBreakdown: Record<string, number>;
        };
    }>;
    create(userId: string, courseId: string, dto: CreateReviewDto): Promise<{
        data: Review;
    }>;
    update(id: string, dto: Partial<CreateReviewDto>): Promise<{
        data: Review;
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
