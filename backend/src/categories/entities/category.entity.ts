import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../common/entities/base.entity';
import { Course } from '../../courses/entities/course.entity';

@Entity('categories')
export class Category extends BaseEntity {
  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ unique: true })
  slug: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  parentId: string;

  @ManyToOne(() => Category, (c) => c.children, { nullable: true })
  @JoinColumn({ name: 'parentId' })
  parent: Category;

  @OneToMany(() => Category, (c) => c.parent)
  children: Category[];

  @OneToMany(() => Course, (course) => course.category)
  courses: Course[];
}
