import { BaseEntity } from '../../common/entities/base.entity';
import { CourseSection } from './course-section.entity';
export declare class Lesson extends BaseEntity {
    title: string;
    videoUrl: string;
    duration: number;
    order: number;
    isPreview: boolean;
    sectionId: string;
    section: CourseSection;
}
