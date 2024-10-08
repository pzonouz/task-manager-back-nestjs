import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  /**
   *
   */
  constructor(
    @InjectRepository(Category)
    private CategoryRepository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    createCategoryDto.name = createCategoryDto.name.toLowerCase().trim();
    const existing = await this.CategoryRepository.findOne({
      where: { name: createCategoryDto.name },
    });
    if (existing) {
      throw new BadRequestException('Category with that name already exists');
    }
    return this.CategoryRepository.save(createCategoryDto);
  }

  findAll() {
    return this.CategoryRepository.find();
  }

  async findOne(id: number) {
    const category = await this.CategoryRepository.findOne({
      where: { id: id },
    });
    if (!category) {
      throw new NotFoundException();
    }
    return category;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.CategoryRepository.update(id, updateCategoryDto);
  }

  remove(id: number) {
    return this.CategoryRepository.delete(id);
  }
}
