"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    app.enableCors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    const config = new swagger_1.DocumentBuilder()
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
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    console.log(`🚀 Application running on: http://localhost:${port}/api/v1`);
    console.log(`📚 Swagger docs at: http://localhost:${port}/api/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map