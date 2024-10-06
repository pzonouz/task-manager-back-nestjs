import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../categories/entities/category.entity';
import { Priority } from '../priorities/entities/priority.entity';
import { Task } from './entities/task.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Priority, Task, User])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
