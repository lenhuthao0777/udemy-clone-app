import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CouponsService, CreateCouponDto } from './coupons.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles, Role } from '../common/decorators/roles.decorator';

@ApiTags('coupons')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
@Controller('coupons')
export class CouponsController {
  constructor(private readonly svc: CouponsService) {}

  @Get() @ApiOperation({ summary: 'List all coupons (Admin)' })
  findAll() { return this.svc.findAll(); }

  @Post() @ApiOperation({ summary: 'Create coupon (Admin)' })
  create(@Body() dto: CreateCouponDto) { return this.svc.create(dto); }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: Partial<CreateCouponDto>) { return this.svc.update(id, dto); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.svc.remove(id); }
}
