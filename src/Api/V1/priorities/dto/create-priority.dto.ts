import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePriorityDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  name: string;
}
