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
exports.WishlistController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const wishlist_service_1 = require("./wishlist.service");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
let WishlistController = class WishlistController {
    svc;
    constructor(svc) {
        this.svc = svc;
    }
    findAll(req) { return this.svc.findAll(req.user.id); }
    add(req, courseId) { return this.svc.add(req.user.id, courseId); }
    remove(req, courseId) { return this.svc.remove(req.user.id, courseId); }
};
exports.WishlistController = WishlistController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get my wishlist' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WishlistController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Add course to wishlist' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], WishlistController.prototype, "add", null);
__decorate([
    (0, common_1.Delete)(':courseId'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove from wishlist' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], WishlistController.prototype, "remove", null);
exports.WishlistController = WishlistController = __decorate([
    (0, swagger_1.ApiTags)('wishlist'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('wishlist'),
    __metadata("design:paramtypes", [wishlist_service_1.WishlistService])
], WishlistController);
//# sourceMappingURL=wishlist.controller.js.map