"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    userRepo;
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async findAll(pagination, keyword) {
        const { page = 1, pageSize = 10 } = pagination;
        const qb = this.userRepo.createQueryBuilder('user');
        if (keyword) {
            qb.where('user.fullName ILIKE :kw OR user.username ILIKE :kw OR user.email ILIKE :kw', {
                kw: `%${keyword}%`,
            });
        }
        const [users, total] = await qb
            .select(['user.id', 'user.username', 'user.fullName', 'user.email', 'user.phone', 'user.avatar', 'user.role', 'user.groupCode', 'user.createdAt'])
            .skip((page - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
        return {
            data: users,
            pagination: { page, pageSize, total, totalPages: Math.ceil(total / pageSize) },
        };
    }
    async findOne(id) {
        const user = await this.userRepo.findOne({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const { password, ...result } = user;
        return { data: result };
    }
    async update(id, dto) {
        const user = await this.userRepo.findOne({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        Object.assign(user, dto);
        await this.userRepo.save(user);
        const { password, ...result } = user;
        return { data: result };
    }
    async remove(id) {
        const user = await this.userRepo.findOne({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        await this.userRepo.remove(user);
        return { data: { message: 'User deleted successfully' } };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map