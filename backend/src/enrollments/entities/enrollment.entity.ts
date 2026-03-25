import { Entity, Column, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';
import { Course } from '../../courses/entities/course.entity';

@Entity('enrollments')
@Unique(['userId', 'courseId'])
export class Enrollment extends BaseEntity {
  @Column()
  userId: string;

  @ManyToOne(() => User, (u) => u.enrollments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  courseId: string;

  @ManyToOne(() => Course, (c) => c.enrollments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  progress: number;

  @ApiProperty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  enrolledAt: Date;
}
