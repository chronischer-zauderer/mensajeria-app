import { Module } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports : [
    ConfigModule,
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({ 
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET')!, 
          
          signOptions: { 
            expiresIn: configService.get<string>('JWT_EXPIRATION_TIME')!,
          },
        } as JwtModuleOptions; 
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController,],
  providers: [AuthService,
    JwtStrategy,
  ],
  exports: [AuthService,
    JwtModule],
})
export class AuthModule {}
  