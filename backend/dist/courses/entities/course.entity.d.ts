import { BaseEntity } from '../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';
import { Category } from '../../categories/entities/category.entity';
import { CourseSection } from './course-section.entity';
import { Enrollment } from '../../enrollments/entities/enrollment.entity';
import { Review } from '../../reviews/entities/review.entity';
import { Wishlist } from '../../wishlist/entities/wishlist.entity';
export declare enum CourseLevel {
    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    ADVANCED = "ADVANCED"
}
export declare class Course extends BaseEntity {
    title: string;
    description: string;
    thumbnail: string;
    price: number;
    originalPrice: number;
    rating: number;
    ratingCount: number;
    studentCount: number;
    duration: number;
    level: CourseLevel;
    language: string;
    groupCode: string;
    instructorId: string;
    instructor: User;
    categoryId: string;
    category: Category;
    sections: CourseSection[];
    enrollments: Enrollment[];
    reviews: Review[];
    wishlistItems: Wishlist[];
}
