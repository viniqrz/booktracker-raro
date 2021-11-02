import { Session } from './SessionEntity';
export declare class Comment {
    id: number;
    session: Session;
    page: number;
    text: string;
}
