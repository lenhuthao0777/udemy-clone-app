import { Controller, Get, Post, Put, Delete, Body, Param, Query,
  UseGuards, Request, UseInterceptors, UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { CreateCourseDto, UpdateCourseDto, QueryCoursesDto } from './dto/course.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles, Role } from '../common/decorators/roles.decorator';

const storage = diskStorage({
  destination: './uploads/courses',
  filename: (_, file, cb) => cb(null, `${Date.now()}${extname(file.originalname)}`),
});

@ApiTags('courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  @ApiOperation({ summary: 'List all courses with filters and pagination' })
  findAll(@Query() pagination: PaginationDto, @Query() query: QueryCoursesDto) {
    return this.coursesService.findAll(pagination, query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get course detail with sections and lessons' })
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.INSTRUCTOR, Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new course' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('thumbnail', { storage }))
  create(
    @Body() dto: CreateCourseDto,
    @Request() req: { user: { id: string } },
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.coursesService.create(dto, req.user.id, file?.filename);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.INSTRUCTOR, Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a course' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('thumbnail', { storage }))
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCourseDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.coursesService.update(id, dto, file?.filename);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a course (Admin only)' })
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }

  @Get(':id/sections')
  @ApiOperation({ summary: 'Get course sections and lessons' })
  getSections(@Param('id') courseId: string) {
    return this.coursesService.getSections(courseId);
  }

  @Post(':id/sections')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.INSTRUCTOR, Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add a section to a course' })
  createSection(@Param('id') courseId: string, @Body('title') title: string) {
    return this.coursesService.createSection(courseId, title);
  }

  @Delete(':id/sections/:sectionId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.INSTRUCTOR, Role.ADMIN)
  @ApiBearerAuth()
  deleteSection(@Param('sectionId') sectionId: string) {
    return this.coursesService.deleteSection(sectionId);
  }
}
