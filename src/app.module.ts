import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './Api/V1/users/users.module';
import { PrioritiesModule } from './Api/V1/priorities/priorities.module';
import { CategoriesModule } from './Api/V1/categories/categories.module';
import { TasksModule } from './Api/V1/tasks/tasks.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    UsersModule,
    PrioritiesModule,
    CategoriesModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('HOST'),
        port: +configService.get('PORT'),
        username: configService.get('USERNAME'),
        password: configService.get('PASSWORD'),
        database: configService.get('DATABASE'),
        entities: [],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
