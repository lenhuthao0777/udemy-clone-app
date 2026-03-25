import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enrollment } from './entities/enrollment.entity';
import { Course } from '../courses/entities/course.entity';

@Injectable()
export class EnrollmentsService {
  constructor(
    @InjectRepository(Enrollment) private enrollRepo: Repository<Enrollment>,
    @InjectRepository(Course) private courseRepo: Repository<Course>,
  ) {}

  async enroll(userId: string, courseId: string) {
    const course = await this.courseRepo.findOne({ where: { id: courseId } });
    if (!course) throw new NotFoundException('Course not found');
    const exists = await this.enrollRepo.findOne({ where: { userId, courseId } });
    if (exists) throw new ConflictException('Already enrolled');
    const enrollment = this.enrollRepo.create({ userId, courseId });
    await this.enrollRepo.save(enrollment);
    // Update student count
    await this.courseRepo.increment({ id: courseId }, 'studentCount', 1);
    return { data: enrollment };
  }

  async findMyEnrollments(userId: string) {
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

  async updateProgress(id: string, progress: number) {
    const enrollment = await this.enrollRepo.findOne({ where: { id } });
    if (!enrollment) throw new NotFoundException('Enrollment not found');
    enrollment.progress = progress;
    await this.enrollRepo.save(enrollment);
    return { data: enrollment };
  }

  async remove(id: string) {
    const enrollment = await this.enrollRepo.findOne({ where: { id } });
    if (!enrollment) throw new NotFoundException('Enrollment not found');
    await this.enrollRepo.remove(enrollment);
    return { data: { message: 'Enrollment removed' } };
  }
}
