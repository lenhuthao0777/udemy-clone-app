import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CategoriesService, CreateCategoryDto } from './categories.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles, Role } from '../common/decorators/roles.decorator';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly svc: CategoriesService) {}

  @Get() @ApiOperation({ summary: 'List all categories' })
  findAll() { return this.svc.findAll(); }

  @Get(':id') @ApiOperation({ summary: 'Get category with courses' })
  findOne(@Param('id') id: string) { return this.svc.findOne(id); }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN) @ApiBearerAuth()
  @ApiOperation({ summary: 'Create category (Admin)' })
  create(@Body() dto: CreateCategoryDto) { return this.svc.create(dto); }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN) @ApiBearerAuth()
  update(@Param('id') id: string, @Body() dto: Partial<CreateCategoryDto>) { return this.svc.update(id, dto); }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN) @ApiBearerAuth()
  remove(@Param('id') id: string) { return this.svc.remove(id); }
}
