import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { PaginationDto } from '../common/dto/pagination.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async findAll(pagination: PaginationDto, keyword?: string) {
    const { page = 1, pageSize = 10 } = pagination;
    const qb = this.userRepo.createQueryBuilder('user');
    if (keyword) {
      qb.where('user.fullName ILIKE :kw OR user.username ILIKE :kw OR user.email ILIKE :kw', {
        kw: `%${keyword}%`,
      });
    }
    const [users, total] = await qb
      .select(['user.id','user.username','user.fullName','user.email','user.phone','user.avatar','user.role','user.groupCode','user.createdAt'])
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();
    return {
      data: users,
      pagination: { page, pageSize, total, totalPages: Math.ceil(total / pageSize) },
    };
  }

  async findOne(id: string) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    const { password, ...result } = user;
    return { data: result };
  }

  async update(id: string, dto: UpdateUserDto) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    Object.assign(user, dto);
    await this.userRepo.save(user);
    const { password, ...result } = user;
    return { data: result };
  }

  async remove(id: string) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    await this.userRepo.remove(user);
    return { data: { message: 'User deleted successfully' } };
  }
}
