import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { Course } from '../courses/entities/course.entity';

export class CreateReviewDto { rating: number; comment?: string; }

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review) private reviewRepo: Repository<Review>,
    @InjectRepository(Course) private courseRepo: Repository<Course>,
  ) {}

  async findByCourse(courseId: string) {
    const reviews = await this.reviewRepo.find({ where: { courseId }, order: { createdAt: 'DESC' } });
    return { data: reviews };
  }

  async getRatingSummary(courseId: string) {
    const reviews = await this.reviewRepo.find({ where: { courseId } });
    const total = reviews.length;
    const avg = total ? reviews.reduce((s, r) => s + r.rating, 0) / total : 0;
    const breakdown: Record<string, number> = { '5': 0, '4': 0, '3': 0, '2': 0, '1': 0 };
    reviews.forEach((r) => breakdown[String(r.rating)]++);
    Object.keys(breakdown).forEach((k) => (breakdown[k] = total ? Math.round((breakdown[k] / total) * 100) : 0));
    return { data: { averageRating: Math.round(avg * 10) / 10, totalReviews: total, ratingBreakdown: breakdown } };
  }

  async create(userId: string, courseId: string, dto: CreateReviewDto) {
    const review = this.reviewRepo.create({ userId, courseId, ...dto });
    await this.reviewRepo.save(review);
    // Update course rating
    const { data: summary } = await this.getRatingSummary(courseId);
    await this.courseRepo.update(courseId, { rating: summary.averageRating, ratingCount: summary.totalReviews });
    return { data: review };
  }

  async update(id: string, dto: Partial<CreateReviewDto>) {
    const review = await this.reviewRepo.findOne({ where: { id } });
    if (!review) throw new NotFoundException('Review not found');
    Object.assign(review, dto);
    await this.reviewRepo.save(review);
    return { data: review };
  }

  async remove(id: string) {
    const review = await this.reviewRepo.findOne({ where: { id } });
    if (!review) throw new NotFoundException('Review not found');
    await this.reviewRepo.remove(review);
    return { data: { message: 'Review deleted' } };
  }

  async like(id: string) {
    await this.reviewRepo.increment({ id }, 'likes', 1);
    return { data: { message: 'Liked' } };
  }

  async dislike(id: string) {
    await this.reviewRepo.increment({ id }, 'dislikes', 1);
    return { data: { message: 'Disliked' } };
  }
}
