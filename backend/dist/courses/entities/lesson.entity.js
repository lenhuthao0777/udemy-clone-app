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
exports.Lesson = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../common/entities/base.entity");
const course_section_entity_1 = require("./course-section.entity");
let Lesson = class Lesson extends base_entity_1.BaseEntity {
    title;
    videoUrl;
    duration;
    order;
    isPreview;
    sectionId;
    section;
};
exports.Lesson = Lesson;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lesson.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Lesson.prototype, "videoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Lesson.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Lesson.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Lesson.prototype, "isPreview", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lesson.prototype, "sectionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_section_entity_1.CourseSection, (s) => s.lessons, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'sectionId' }),
    __metadata("design:type", course_section_entity_1.CourseSection)
], Lesson.prototype, "section", void 0);
exports.Lesson = Lesson = __decorate([
    (0, typeorm_1.Entity)('lessons')
], Lesson);
//# sourceMappingURL=lesson.entity.js.map