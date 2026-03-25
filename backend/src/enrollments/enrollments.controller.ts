import { Controller, Get, Post, Delete, Patch, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { EnrollmentsService } from './enrollments.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles, Role } from '../common/decorators/roles.decorator';

@ApiTags('enrollments')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('enrollments')
export class EnrollmentsController {
  constructor(private readonly svc: EnrollmentsService) {}

  @Post()
  @ApiOperation({ summary: 'Enroll in a course' })
  enroll(@Request() req: { user: { id: string } }, @Body('courseId') courseId: string) {
    return this.svc.enroll(req.user.id, courseId);
  }

  @Get('me')
  @ApiOperation({ summary: 'Get my enrollments' })
  findMe(@Request() req: { user: { id: string } }) { return this.svc.findMyEnrollments(req.user.id); }

  @Get()
  @UseGuards(RolesGuard) @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'List all enrollments (Admin)' })
  findAll() { return this.svc.findAll(); }

  @Patch(':id/progress')
  @ApiOperation({ summary: 'Update lesson progress' })
  updateProgress(@Param('id') id: string, @Body('progress') progress: number) {
    return this.svc.updateProgress(id, progress);
  }

  @Delete(':id')
  @UseGuards(RolesGuard) @Roles(Role.ADMIN)
  remove(@Param('id') id: string) { return this.svc.remove(id); }
}
