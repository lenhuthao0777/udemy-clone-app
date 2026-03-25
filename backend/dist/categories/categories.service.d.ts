import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
export declare class CreateCategoryDto {
    name: string;
    slug: string;
    parentId?: string;
}
export declare class CategoriesService {
    private categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    findAll(): Promise<{
        data: Category[];
    }>;
    findOne(id: string): Promise<{
        data: Category;
    }>;
    create(dto: CreateCategoryDto): Promise<{
        data: Category;
    }>;
    update(id: string, dto: Partial<CreateCategoryDto>): Promise<{
        data: Category;
    }>;
    remove(id: string): Promise<{
        data: {
            message: string;
        };
    }>;
}
