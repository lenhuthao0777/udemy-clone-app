import {
  Entity, Column, ManyToOne, OneToMany, JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';
import { Category } from '../../categories/entities/category.entity';
import { CourseSection } from './course-section.entity';
import { Enrollment } from '../../enrollments/entities/enrollment.entity';
import { Review } from '../../reviews/entities/review.entity';
import { Wishlist } from '../../wishlist/entities/wishlist.entity';

export enum CourseLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

@Entity('courses')
export class Course extends BaseEntity {
  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiProperty()
  @Column({ nullable: true })
  thumbnail: string;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  originalPrice: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 3, scale: 1, default: 0 })
  rating: number;

  @ApiProperty()
  @Column({ default: 0 })
  ratingCount: number;

  @ApiProperty()
  @Column({ default: 0 })
  studentCount: number;

  @ApiProperty()
  @Column({ nullable: true })
  duration: number;

  @ApiProperty({ enum: CourseLevel })
  @Column({ type: 'enum', enum: CourseLevel, default: CourseLevel.BEGINNER })
  level: CourseLevel;

  @ApiProperty()
  @Column({ default: 'Vietnamese' })
  language: string;

  @ApiProperty()
  @Column({ nullable: true })
  groupCode: string;

  @Column({ nullable: true })
  instructorId: string;

  @ManyToOne(() => User, { eager: false })
  @JoinColumn({ name: 'instructorId' })
  instructor: User;

  @Column({ nullable: true })
  categoryId: string;

  @ManyToOne(() => Category, (c) => c.courses, { eager: false })
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @OneToMany(() => CourseSection, (s) => s.course, { cascade: true })
  sections: CourseSection[];

  @OneToMany(() => Enrollment, (e) => e.course)
  enrollments: Enrollment[];

  @OneToMany(() => Review, (r) => r.course)
  reviews: Review[];

  @OneToMany(() => Wishlist, (w) => w.course)
  wishlistItems: Wishlist[];
}
