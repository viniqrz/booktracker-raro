import { Read } from './ReadEntity';
import { Review } from './ReviewEntity';
import { Session } from './SessionEntity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    reviews: Review[];
    sessions: Session[];
    reads: Read[];
}
