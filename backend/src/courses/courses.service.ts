import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { CourseSection } from './entities/course-section.entity';
import { PaginationDto } from '../common/dto/pagination.dto';
import { CreateCourseDto, UpdateCourseDto, QueryCoursesDto } from './dto/course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) private courseRepo: Repository<Course>,
    @InjectRepository(CourseSection) private sectionRepo: Repository<CourseSection>,
  ) {}

  async findAll(pagination: PaginationDto, query: QueryCoursesDto) {
    const { page = 1, pageSize = 10 } = pagination;
    const qb = this.courseRepo.createQueryBuilder('course')
      .leftJoinAndSelect('course.category', 'category')
      .leftJoinAndSelect('course.instructor', 'instructor')
      .select(['course', 'category.id', 'category.name', 'instructor.id', 'instructor.fullName', 'instructor.avatar']);

    if (query.keyword) qb.andWhere('course.title ILIKE :kw', { kw: `%${query.keyword}%` });
    if (query.categoryId) qb.andWhere('course.categoryId = :cat', { cat: query.categoryId });
    if (query.groupCode) qb.andWhere('course.groupCode = :gc', { gc: query.groupCode });
    if (query.level) qb.andWhere('course.level = :lv', { lv: query.level });

    const [courses, total] = await qb.skip((page - 1) * pageSize).take(pageSize).getManyAndCount();
    return { data: courses, pagination: { page, pageSize, total, totalPages: Math.ceil(total / pageSize) } };
  }

  async findOne(id: string) {
    const course = await this.courseRepo.findOne({
      where: { id },
      relations: ['category', 'instructor', 'sections', 'sections.lessons'],
    });
    if (!course) throw new NotFoundException('Course not found');
    return { data: course };
  }

  async create(dto: CreateCourseDto, instructorId: string, thumbnail?: string) {
    const course = this.courseRepo.create({ ...dto, instructorId, thumbnail });
    await this.courseRepo.save(course);
    return { data: course };
  }

  async update(id: string, dto: UpdateCourseDto, thumbnail?: string) {
    const course = await this.courseRepo.findOne({ where: { id } });
    if (!course) throw new NotFoundException('Course not found');
    Object.assign(course, dto);
    if (thumbnail) course.thumbnail = thumbnail;
    await this.courseRepo.save(course);
    return { data: course };
  }

  async remove(id: string) {
    const course = await this.courseRepo.findOne({ where: { id } });
    if (!course) throw new NotFoundException('Course not found');
    await this.courseRepo.remove(course);
    return { data: { message: 'Course deleted' } };
  }

  async getSections(courseId: string) {
    const sections = await this.sectionRepo.find({
      where: { courseId },
      relations: ['lessons'],
      order: { order: 'ASC' },
    });
    return { data: sections };
  }

  async createSection(courseId: string, title: string) {
    const section = this.sectionRepo.create({ courseId, title });
    await this.sectionRepo.save(section);
    return { data: section };
  }

  async deleteSection(id: string) {
    const section = await this.sectionRepo.findOne({ where: { id } });
    if (!section) throw new NotFoundException('Section not found');
    await this.sectionRepo.remove(section);
    return { data: { message: 'Section deleted' } };
  }
}
