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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = exports.CourseLevel = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../common/entities/base.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const category_entity_1 = require("../../categories/entities/category.entity");
const course_section_entity_1 = require("./course-section.entity");
const enrollment_entity_1 = require("../../enrollments/entities/enrollment.entity");
const review_entity_1 = require("../../reviews/entities/review.entity");
const wishlist_entity_1 = require("../../wishlist/entities/wishlist.entity");
var CourseLevel;
(function (CourseLevel) {
    CourseLevel["BEGINNER"] = "BEGINNER";
    CourseLevel["INTERMEDIATE"] = "INTERMEDIATE";
    CourseLevel["ADVANCED"] = "ADVANCED";
})(CourseLevel || (exports.CourseLevel = CourseLevel = {}));
let Course = class Course extends base_entity_1.BaseEntity {
    title;
    description;
    thumbnail;
    price;
    originalPrice;
    rating;
    ratingCount;
    studentCount;
    duration;
    level;
    language;
    groupCode;
    instructorId;
    instructor;
    categoryId;
    category;
    sections;
    enrollments;
    reviews;
    wishlistItems;
};
exports.Course = Course;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Course.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Course.prototype, "thumbnail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Course.prototype, "originalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "ratingCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "studentCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Course.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: CourseLevel }),
    (0, typeorm_1.Column)({ type: 'enum', enum: CourseLevel, default: CourseLevel.BEGINNER }),
    __metadata("design:type", String)
], Course.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: 'Vietnamese' }),
    __metadata("design:type", String)
], Course.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Course.prototype, "groupCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Course.prototype, "instructorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'instructorId' }),
    __metadata("design:type", user_entity_1.User)
], Course.prototype, "instructor", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Course.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (c) => c.courses, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'categoryId' }),
    __metadata("design:type", category_entity_1.Category)
], Course.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => course_section_entity_1.CourseSection, (s) => s.course, { cascade: true }),
    __metadata("design:type", Array)
], Course.prototype, "sections", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => enrollment_entity_1.Enrollment, (e) => e.course),
    __metadata("design:type", Array)
], Course.prototype, "enrollments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_entity_1.Review, (r) => r.course),
    __metadata("design:type", Array)
], Course.prototype, "reviews", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => wishlist_entity_1.Wishlist, (w) => w.course),
    __metadata("design:type", Array)
], Course.prototype, "wishlistItems", void 0);
exports.Course = Course = __decorate([
    (0, typeorm_1.Entity)('courses')
], Course);
//# sourceMappingURL=course.entity.js.map