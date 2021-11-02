import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Comment } from './CommentEntity';
import { Read } from './ReadEntity';
import { Review } from './ReviewEntity';
import { Session } from './SessionEntity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 50 })
  name: string;

  @Column({ nullable: false, length: 50, unique: true })
  email: string;

  @Column({ nullable: false, length: 50 })
  password: string;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];

  @OneToMany(() => Read, (read) => read.user)
  reads: Read[];
}
