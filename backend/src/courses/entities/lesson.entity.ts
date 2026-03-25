import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../common/entities/base.entity';
import { CourseSection } from './course-section.entity';

@Entity('lessons')
export class Lesson extends BaseEntity {
  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column({ nullable: true })
  videoUrl: string;

  @ApiProperty()
  @Column({ nullable: true })
  duration: number;

  @ApiProperty()
  @Column({ default: 0 })
  order: number;

  @ApiProperty()
  @Column({ default: false })
  isPreview: boolean;

  @Column()
  sectionId: string;

  @ManyToOne(() => CourseSection, (s) => s.lessons, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sectionId' })
  section: CourseSection;
}
