import { Book } from './BookEntity';
import { User } from './UserEntity';
export declare class Review {
    id: number;
    rating: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    text: string;
    user: User;
    book: Book;
}
