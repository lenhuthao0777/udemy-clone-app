import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

export class CreateCategoryDto {
  name: string;
  slug: string;
  parentId?: string;
}

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private categoryRepo: Repository<Category>) {}

  async findAll() {
    const cats = await this.categoryRepo.find({ relations: ['children'] });
    return { data: cats };
  }

  async findOne(id: string) {
    const cat = await this.categoryRepo.findOne({ where: { id }, relations: ['courses', 'children'] });
    if (!cat) throw new NotFoundException('Category not found');
    return { data: cat };
  }

  async create(dto: CreateCategoryDto) {
    const cat = this.categoryRepo.create(dto);
    await this.categoryRepo.save(cat);
    return { data: cat };
  }

  async update(id: string, dto: Partial<CreateCategoryDto>) {
    const cat = await this.categoryRepo.findOne({ where: { id } });
    if (!cat) throw new NotFoundException('Category not found');
    Object.assign(cat, dto);
    await this.categoryRepo.save(cat);
    return { data: cat };
  }

  async remove(id: string) {
    const cat = await this.categoryRepo.findOne({ where: { id } });
    if (!cat) throw new NotFoundException('Category not found');
    await this.categoryRepo.remove(cat);
    return { data: { message: 'Category deleted' } };
  }
}
