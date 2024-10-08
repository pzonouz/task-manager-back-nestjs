import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePriorityDto } from './dto/create-priority.dto';
import { UpdatePriorityDto } from './dto/update-priority.dto';
import { Repository } from 'typeorm';
import { Priority } from './entities/priority.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PrioritiesService {
  constructor(
    @InjectRepository(Priority)
    private priorityRepository: Repository<Priority>,
  ) {}
  async create(createPriorityDto: CreatePriorityDto) {
    createPriorityDto.name = createPriorityDto.name.toLowerCase().trim();
    const existing = await this.priorityRepository.findOne({
      where: { name: createPriorityDto.name },
    });
    if (existing) {
      throw new BadRequestException('Priority with that name already exists');
    }
    return this.priorityRepository.save(createPriorityDto);
  }

  findAll() {
    return this.priorityRepository.find();
  }

  async findOne(id: number) {
    const priority = await this.priorityRepository.findOne({
      where: { id: id },
    });
    if (!priority) {
      throw new NotFoundException();
    }
    return priority;
  }

  update(id: number, updatePriorityDto: UpdatePriorityDto) {
    return this.priorityRepository.update(id, updatePriorityDto);
  }

  remove(id: number) {
    return this.priorityRepository.delete(id);
  }
}
