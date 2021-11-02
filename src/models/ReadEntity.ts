import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './UserEntity';

@Entity()
export class Read {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.reads)
  user: User;
}
