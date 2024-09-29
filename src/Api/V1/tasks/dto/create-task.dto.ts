import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Max,
  max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

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

  @IsUUID()
  @IsNotEmpty()
  category_id: number;

  @IsUUID()
  @IsNotEmpty()
  priority_id: number;

  @IsUUID()
  @IsNotEmpty()
  user_id: number;

  @IsNotEmpty()
  @IsBoolean()
  completed: boolean;
}
