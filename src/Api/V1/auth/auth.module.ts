import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './Strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
  imports: [
    UsersModule,
    PassportModule,
    // FIXME: ConfigService Mus implemented for secret and signOptions
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '24h' } }),
  ],
})
export class AuthModule {}
