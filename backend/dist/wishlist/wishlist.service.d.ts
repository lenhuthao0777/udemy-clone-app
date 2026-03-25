import { Repository } from 'typeorm';
import { Wishlist } from './entities/wishlist.entity';
export declare class WishlistService {
    private wishRepo;
    constructor(wishRepo: Repository<Wishlist>);
    findAll(userId: string): Promise<{
        data: Wishlist[];
    }>;
    add(userId: string, courseId: string): Promise<{
        data: Wishlist;
    }>;
    remove(userId: string, courseId: string): Promise<{
        data: {
            message: string;
        };
    }>;
}
