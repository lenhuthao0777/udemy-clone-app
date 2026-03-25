import { CategoriesService, CreateCategoryDto } from './categories.service';
export declare class CategoriesController {
    private readonly svc;
    constructor(svc: CategoriesService);
    findAll(): Promise<{
        data: import("./entities/category.entity").Category[];
    }>;
    findOne(id: string): Promise<{
        data: import("./entities/category.entity").Category;
    }>;
    create(dto: CreateCategoryDto): Promise<{
        data: import("./entities/category.entity").Category;
    }>;
    update(id: string, dto: Partial<CreateCategoryDto>): Promise<{
        data: import("./entities/category.entity").Category;
    }>;
    remove(id: string): Promise<{
        data: {
            message: string;
        };
    }>;
}
