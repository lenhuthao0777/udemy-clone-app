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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const course_entity_1 = require("./entities/course.entity");
const course_section_entity_1 = require("./entities/course-section.entity");
let CoursesService = class CoursesService {
    courseRepo;
    sectionRepo;
    constructor(courseRepo, sectionRepo) {
        this.courseRepo = courseRepo;
        this.sectionRepo = sectionRepo;
    }
    async findAll(pagination, query) {
        const { page = 1, pageSize = 10 } = pagination;
        const qb = this.courseRepo.createQueryBuilder('course')
            .leftJoinAndSelect('course.category', 'category')
            .leftJoinAndSelect('course.instructor', 'instructor')
            .select(['course', 'category.id', 'category.name', 'instructor.id', 'instructor.fullName', 'instructor.avatar']);
        if (query.keyword)
            qb.andWhere('course.title ILIKE :kw', { kw: `%${query.keyword}%` });
        if (query.categoryId)
            qb.andWhere('course.categoryId = :cat', { cat: query.categoryId });
        if (query.groupCode)
            qb.andWhere('course.groupCode = :gc', { gc: query.groupCode });
        if (query.level)
            qb.andWhere('course.level = :lv', { lv: query.level });
        const [courses, total] = await qb.skip((page - 1) * pageSize).take(pageSize).getManyAndCount();
        return { data: courses, pagination: { page, pageSize, total, totalPages: Math.ceil(total / pageSize) } };
    }
    async findOne(id) {
        const course = await this.courseRepo.findOne({
            where: { id },
            relations: ['category', 'instructor', 'sections', 'sections.lessons'],
        });
        if (!course)
            throw new common_1.NotFoundException('Course not found');
        return { data: course };
    }
    async create(dto, instructorId, thumbnail) {
        const course = this.courseRepo.create({ ...dto, instructorId, thumbnail });
        await this.courseRepo.save(course);
        return { data: course };
    }
    async update(id, dto, thumbnail) {
        const course = await this.courseRepo.findOne({ where: { id } });
        if (!course)
            throw new common_1.NotFoundException('Course not found');
        Object.assign(course, dto);
        if (thumbnail)
            course.thumbnail = thumbnail;
        await this.courseRepo.save(course);
        return { data: course };
    }
    async remove(id) {
        const course = await this.courseRepo.findOne({ where: { id } });
        if (!course)
            throw new common_1.NotFoundException('Course not found');
        await this.courseRepo.remove(course);
        return { data: { message: 'Course deleted' } };
    }
    async getSections(courseId) {
        const sections = await this.sectionRepo.find({
            where: { courseId },
            relations: ['lessons'],
            order: { order: 'ASC' },
        });
        return { data: sections };
    }
    async createSection(courseId, title) {
        const section = this.sectionRepo.create({ courseId, title });
        await this.sectionRepo.save(section);
        return { data: section };
    }
    async deleteSection(id) {
        const section = await this.sectionRepo.findOne({ where: { id } });
        if (!section)
            throw new common_1.NotFoundException('Section not found');
        await this.sectionRepo.remove(section);
        return { data: { message: 'Section deleted' } };
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __param(1, (0, typeorm_1.InjectRepository)(course_section_entity_1.CourseSection)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CoursesService);
//# sourceMappingURL=courses.service.js.map