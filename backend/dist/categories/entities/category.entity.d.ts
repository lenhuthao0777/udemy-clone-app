import { BaseEntity } from '../../common/entities/base.entity';
import { Course } from '../../courses/entities/course.entity';
export declare class Category extends BaseEntity {
    name: string;
    slug: string;
    parentId: string;
    parent: Category;
    children: Category[];
    courses: Course[];
}
