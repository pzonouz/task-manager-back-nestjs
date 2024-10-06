import { IsEmail, Length } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from '../../tasks/entities/task.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  @IsEmail()
  email: string;

  @Column({ nullable: false })
  @Length(8, 64)
  password: string;

  @OneToMany(() => Task, (task) => task.user)
  Tasks: Task[];
}
