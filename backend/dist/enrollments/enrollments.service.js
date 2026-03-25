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
exports.EnrollmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const enrollment_entity_1 = require("./entities/enrollment.entity");
const course_entity_1 = require("../courses/entities/course.entity");
let EnrollmentsService = class EnrollmentsService {
    enrollRepo;
    courseRepo;
    constructor(enrollRepo, courseRepo) {
        this.enrollRepo = enrollRepo;
        this.courseRepo = courseRepo;
    }
    async enroll(userId, courseId) {
        const course = await this.courseRepo.findOne({ where: { id: courseId } });
        if (!course)
            throw new common_1.NotFoundException('Course not found');
        const exists = await this.enrollRepo.findOne({ where: { userId, courseId } });
        if (exists)
            throw new common_1.ConflictException('Already enrolled');
        const enrollment = this.enrollRepo.create({ userId, courseId });
        await this.enrollRepo.save(enrollment);
        await this.courseRepo.increment({ id: courseId }, 'studentCount', 1);
        return { data: enrollment };
    }
    async findMyEnrollments(userId) {
        const enrollments = await this.enrollRepo.find({
            where: { userId },
            relations: ['course', 'course.category'],
        });
        return { data: enrollments };
    }
    async findAll() {
        const enrollments = await this.enrollRepo.find({ relations: ['user', 'course'] });
        return { data: enrollments };
    }
    async updateProgress(id, progress) {
        const enrollment = await this.enrollRepo.findOne({ where: { id } });
        if (!enrollment)
            throw new common_1.NotFoundException('Enrollment not found');
        enrollment.progress = progress;
        await this.enrollRepo.save(enrollment);
        return { data: enrollment };
    }
    async remove(id) {
        const enrollment = await this.enrollRepo.findOne({ where: { id } });
        if (!enrollment)
            throw new common_1.NotFoundException('Enrollment not found');
        await this.enrollRepo.remove(enrollment);
        return { data: { message: 'Enrollment removed' } };
    }
};
exports.EnrollmentsService = EnrollmentsService;
exports.EnrollmentsService = EnrollmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(enrollment_entity_1.Enrollment)),
    __param(1, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EnrollmentsService);
//# sourceMappingURL=enrollments.service.js.map