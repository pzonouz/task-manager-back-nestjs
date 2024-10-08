import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './Api/V1/users/users.module';
import { PrioritiesModule } from './Api/V1/priorities/priorities.module';
import { CategoriesModule } from './Api/V1/categories/categories.module';
import { TasksModule } from './Api/V1/tasks/tasks.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './Api/V1/auth/auth.module';
import { AuthController } from './Api/V1/auth/auth.controller';

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
        host: configService.get('DATABASE_HOST'),
        port: +configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [],
})
export class AppModule {}
