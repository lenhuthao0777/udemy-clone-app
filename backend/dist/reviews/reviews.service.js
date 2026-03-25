"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsService = exports.CreateReviewDto = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const review_entity_1 = require("./entities/review.entity");
const course_entity_1 = require("../courses/entities/course.entity");
class CreateReviewDto {
    rating;
    comment;
}
exports.CreateReviewDto = CreateReviewDto;
let ReviewsService = class ReviewsService {
    reviewRepo;
    courseRepo;
    constructor(reviewRepo, courseRepo) {
        this.reviewRepo = reviewRepo;
        this.courseRepo = courseRepo;
    }
    async findByCourse(courseId) {
        const reviews = await this.reviewRepo.find({ where: { courseId }, order: { createdAt: 'DESC' } });
        return { data: reviews };
    }
    async getRatingSummary(courseId) {
        const reviews = await this.reviewRepo.find({ where: { courseId } });
        const total = reviews.length;
        const avg = total ? reviews.reduce((s, r) => s + r.rating, 0) / total : 0;
        const breakdown = { '5': 0, '4': 0, '3': 0, '2': 0, '1': 0 };
        reviews.forEach((r) => breakdown[String(r.rating)]++);
        Object.keys(breakdown).forEach((k) => (breakdown[k] = total ? Math.round((breakdown[k] / total) * 100) : 0));
        return { data: { averageRating: Math.round(avg * 10) / 10, totalReviews: total, ratingBreakdown: breakdown } };
    }
    async create(userId, courseId, dto) {
        const review = this.reviewRepo.create({ userId, courseId, ...dto });
        await this.reviewRepo.save(review);
        const { data: summary } = await this.getRatingSummary(courseId);
        await this.courseRepo.update(courseId, { rating: summary.averageRating, ratingCount: summary.totalReviews });
        return { data: review };
    }
    async update(id, dto) {
        const review = await this.reviewRepo.findOne({ where: { id } });
        if (!review)
            throw new common_1.NotFoundException('Review not found');
        Object.assign(review, dto);
        await this.reviewRepo.save(review);
        return { data: review };
    }
    async remove(id) {
        const review = await this.reviewRepo.findOne({ where: { id } });
        if (!review)
            throw new common_1.NotFoundException('Review not found');
        await this.reviewRepo.remove(review);
        return { data: { message: 'Review deleted' } };
    }
    async like(id) {
        await this.reviewRepo.increment({ id }, 'likes', 1);
        return { data: { message: 'Liked' } };
    }
    async dislike(id) {
        await this.reviewRepo.increment({ id }, 'dislikes', 1);
        return { data: { message: 'Disliked' } };
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __param(1, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map