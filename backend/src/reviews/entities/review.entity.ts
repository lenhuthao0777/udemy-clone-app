import { Entity, Column, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';
import { Course } from '../../courses/entities/course.entity';

@Entity('reviews')
@Unique(['userId', 'courseId'])
export class Review extends BaseEntity {
  @Column()
  userId: string;

  @ManyToOne(() => User, (u) => u.reviews, { eager: true })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  courseId: string;

  @ManyToOne(() => Course, (c) => c.reviews, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @ApiProperty({ minimum: 1, maximum: 5 })
  @Column({ type: 'int' })
  rating: number;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  comment: string;

  @ApiProperty()
  @Column({ default: 0 })
  likes: number;

  @ApiProperty()
  @Column({ default: 0 })
  dislikes: number;
}
