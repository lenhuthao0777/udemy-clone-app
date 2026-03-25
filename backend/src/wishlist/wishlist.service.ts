import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wishlist } from './entities/wishlist.entity';

@Injectable()
export class WishlistService {
  constructor(@InjectRepository(Wishlist) private wishRepo: Repository<Wishlist>) {}

  async findAll(userId: string) {
    const items = await this.wishRepo.find({ where: { userId } });
    return { data: items };
  }

  async add(userId: string, courseId: string) {
    const exists = await this.wishRepo.findOne({ where: { userId, courseId } });
    if (exists) throw new ConflictException('Already in wishlist');
    const item = this.wishRepo.create({ userId, courseId });
    await this.wishRepo.save(item);
    return { data: item };
  }

  async remove(userId: string, courseId: string) {
    await this.wishRepo.delete({ userId, courseId });
    return { data: { message: 'Removed from wishlist' } };
  }
}
