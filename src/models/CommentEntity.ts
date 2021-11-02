import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Session } from './SessionEntity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  page: number;

  @Column({ length: 500, nullable: false })
  text: string;

  @ManyToOne(() => Session, (session) => session.comments)
  session: Session;
}
