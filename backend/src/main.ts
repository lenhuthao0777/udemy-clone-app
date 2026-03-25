// Polyfill Web Crypto API for @nestjs/typeorm (crypto.randomUUID)
import { webcrypto } from 'crypto';
if (!globalThis.crypto) {
  (globalThis as any).crypto = webcrypto;
}

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix
  app.setGlobalPrefix('api/v1');

  // CORS
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('E-Learning API')
    .setDescription('Udemy Clone — REST API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('auth', 'Authentication')
    .addTag('users', 'User management')
    .addTag('courses', 'Course management')
    .addTag('categories', 'Course categories')
    .addTag('enrollments', 'Enrollments')
    .addTag('orders', 'Orders & checkout')
    .addTag('reviews', 'Reviews & ratings')
    .addTag('wishlist', 'Wishlist')
    .addTag('coupons', 'Coupon management')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 Application running on: http://localhost:${port}/api/v1`);
  console.log(`📚 Swagger docs at: http://localhost:${port}/api/docs`);
}
bootstrap();
