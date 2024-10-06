import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Category } from '../../categories/entities/category.entity';
import { Priority } from '../../priorities/entities/priority.entity';
import { User } from '../../users/entities/user.entity';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(255)
  description: string;

  @IsNotEmpty()
  @IsDateString()
  dueDate: Date;

  @IsNotEmpty()
  @IsNumber()
  @Max(100)
  @Min(0)
  progress_percentage: number;

  @Type(() => Category)
  @ValidateNested({ each: true })
  category: Category;

  @Type(() => Priority)
  @ValidateNested({ each: true })
  priority: Priority;

  @Type(() => User)
  @ValidateNested({ each: true })
  user: User;

  @IsNotEmpty()
  @IsBoolean()
  completed: boolean;
}
