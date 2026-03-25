import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ReviewsService, CreateReviewDto } from './reviews.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@ApiTags('reviews')
@Controller('courses/:courseId/reviews')
export class ReviewsController {
  constructor(private readonly svc: ReviewsService) {}

  @Get() @ApiOperation({ summary: 'Get reviews for a course' })
  findAll(@Param('courseId') courseId: string) { return this.svc.findByCourse(courseId); }

  @Get('summary') @ApiOperation({ summary: 'Get rating breakdown (1-5 star percentages)' })
  summary(@Param('courseId') courseId: string) { return this.svc.getRatingSummary(courseId); }

  @Post()
  @UseGuards(JwtAuthGuard) @ApiBearerAuth()
  @ApiOperation({ summary: 'Submit a review (must be enrolled)' })
  create(
    @Param('courseId') courseId: string,
    @Request() req: { user: { id: string } },
    @Body() dto: CreateReviewDto,
  ) {
    return this.svc.create(req.user.id, courseId, dto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard) @ApiBearerAuth()
  update(@Param('id') id: string, @Body() dto: Partial<CreateReviewDto>) { return this.svc.update(id, dto); }

  @Delete(':id')
  @UseGuards(JwtAuthGuard) @ApiBearerAuth()
  remove(@Param('id') id: string) { return this.svc.remove(id); }

  @Post(':id/like')
  @UseGuards(JwtAuthGuard) @ApiBearerAuth()
  like(@Param('id') id: string) { return this.svc.like(id); }

  @Post(':id/dislike')
  @UseGuards(JwtAuthGuard) @ApiBearerAuth()
  dislike(@Param('id') id: string) { return this.svc.dislike(id); }
}
