import { Review } from './ReviewEntity';
import { Session } from './SessionEntity';
export declare class Book {
    id: number;
    name: string;
    sessions: Session[];
    reviews: Review[];
}
