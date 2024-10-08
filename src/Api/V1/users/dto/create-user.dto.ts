import { IsEmail, IsNotEmpty, MaxLength, Matches } from 'class-validator';
import { Task } from '../../tasks/entities/task.entity';

export class CreateUserDto {
  id: number;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @MaxLength(64)
  @Matches(
    /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
    {
      message:
        'Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long',
    },
  )
  password: string;

  Tasks: Task[];
}
