import { WishlistService } from './wishlist.service';
export declare class WishlistController {
    private readonly svc;
    constructor(svc: WishlistService);
    findAll(req: {
        user: {
            id: string;
        };
    }): Promise<{
        data: import("./entities/wishlist.entity").Wishlist[];
    }>;
    add(req: {
        user: {
            id: string;
        };
    }, courseId: string): Promise<{
        data: import("./entities/wishlist.entity").Wishlist;
    }>;
    remove(req: {
        user: {
            id: string;
        };
    }, courseId: string): Promise<{
        data: {
            message: string;
        };
    }>;
}
