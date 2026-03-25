import { Controller, Get, Post, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { WishlistService } from './wishlist.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@ApiTags('wishlist')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('wishlist')
export class WishlistController {
  constructor(private readonly svc: WishlistService) {}

  @Get() @ApiOperation({ summary: 'Get my wishlist' })
  findAll(@Request() req: { user: { id: string } }) { return this.svc.findAll(req.user.id); }

  @Post() @ApiOperation({ summary: 'Add course to wishlist' })
  add(@Request() req: { user: { id: string } }, @Body('courseId') courseId: string) { return this.svc.add(req.user.id, courseId); }

  @Delete(':courseId') @ApiOperation({ summary: 'Remove from wishlist' })
  remove(@Request() req: { user: { id: string } }, @Param('courseId') courseId: string) { return this.svc.remove(req.user.id, courseId); }
}
