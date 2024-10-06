import {
  IsDateString,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { Priority } from '../../priorities/entities/priority.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @IsString()
  @Length(3, 255)
  name: string;

  @Column({ nullable: false })
  @IsString()
  @Length(8, 255)
  description: string;

  @Column({ nullable: false })
  @IsDateString()
  dueDate: Date;

  @Column({ default: 0 })
  @IsNumber()
  @Max(100)
  @Min(0)
  progress_percentage: number;

  @ManyToOne(() => Category, (category) => category)
  category: Category;

  @ManyToOne(() => Priority, (priority) => priority)
  priority: Priority;

  @ManyToOne(() => User, (user) => user)
  user: User;

  completed: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
