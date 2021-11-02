import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Review } from './ReviewEntity';
import { Comment } from './CommentEntity';
import { Session } from './SessionEntity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 120, unique: true })
  name: string;

  @Column({ nullable: false, length: 500 })
  coverUrl: string;

  @Column({ nullable: false, length: 500 })
  author: string;

  @Column({ nullable: false })
  releaseYear: number;

  @OneToMany(() => Session, (session) => session.book)
  sessions: Session[];

  @OneToMany(() => Review, (review) => review.book)
  reviews: Review[];
}
