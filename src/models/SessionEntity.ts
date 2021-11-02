import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from './BookEntity';
import { User } from './UserEntity';
import { Comment } from './CommentEntity';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  start: Date;

  @Column()
  end: Date;

  @Column({ nullable: false })
  pageStart: number;

  @Column()
  pageEnd: number;

  @OneToMany(() => Comment, (comment) => comment.session)
  comments: Comment[];

  @ManyToOne(() => Book, (book) => book.sessions)
  book: Book;

  @ManyToOne(() => User, (user) => user.sessions)
  user: User;
}
