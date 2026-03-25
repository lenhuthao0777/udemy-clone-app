import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../common/entities/base.entity';
import { Course } from './course.entity';
import { Lesson } from './lesson.entity';

@Entity('course_sections')
export class CourseSection extends BaseEntity {
  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column({ default: 0 })
  order: number;

  @Column()
  courseId: string;

  @ManyToOne(() => Course, (c) => c.sections, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @OneToMany(() => Lesson, (l) => l.section, { cascade: true })
  lessons: Lesson[];
}
