import { Entity, Column, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';
import { Course } from '../../courses/entities/course.entity';

@Entity('wishlists')
@Unique(['userId', 'courseId'])
export class Wishlist extends BaseEntity {
  @Column()
  userId: string;

  @ManyToOne(() => User, (u) => u.wishlist, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  courseId: string;

  @ManyToOne(() => Course, (c) => c.wishlistItems, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  course: Course;
}
