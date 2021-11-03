import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Book } from './BookEntity';
import { User } from './UserEntity';

@Entity()
export class Read {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  finished: boolean;

  @ManyToOne(() => Book, (book) => book.reads)
  book: Book;

  @ManyToOne(() => User, (user) => user.reads)
  user: User;
}
