import { Controller, Get, Post, Patch, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { OrdersService, CreateOrderDto } from './orders.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles, Role } from '../common/decorators/roles.decorator';
import { OrderStatus } from './entities/order.entity';

@ApiTags('orders')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {
  constructor(private readonly svc: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Checkout — create order & enroll in courses' })
  create(@Request() req: { user: { id: string } }, @Body() dto: CreateOrderDto) {
    return this.svc.createOrder(req.user.id, dto);
  }

  @Get('me')
  @ApiOperation({ summary: 'My orders' })
  findMe(@Request() req: { user: { id: string } }) { return this.svc.findMyOrders(req.user.id); }

  @Get()
  @UseGuards(RolesGuard) @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'All orders (Admin)' })
  findAll() { return this.svc.findAll(); }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.svc.findOne(id); }

  @Patch(':id/status')
  @UseGuards(RolesGuard) @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Update order status (Admin)' })
  updateStatus(@Param('id') id: string, @Body('status') status: OrderStatus) {
    return this.svc.updateStatus(id, status);
  }

  @Post('validate-coupon')
  @ApiOperation({ summary: 'Validate a coupon code' })
  validateCoupon(@Body('code') code: string, @Body('subtotal') subtotal: number) {
    return this.svc.validateCoupon(code, subtotal);
  }
}
