import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { Task } from "../../tasks/entities/task.entity";

export class CreateUserDto {
    id: number;
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    @Length(8,64)
    password: string;
  
    Tasks: Task[];
  }
}
