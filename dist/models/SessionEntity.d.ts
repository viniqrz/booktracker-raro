import { Book } from './BookEntity';
import { User } from './UserEntity';
import { Comment } from './CommentEntity';
export declare class Session {
    id: number;
    start: Date;
    end: Date;
    pageStart: number;
    pageEnd: number;
    book: Book;
    user: User;
    comments: Comment[];
}
