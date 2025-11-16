import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FriendRequestModule } from './friend-request/friend-request.module';
import { ContactModule } from './contact/contact.module';


@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true, 
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Requerido para usar ConfigService
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, 
      }),
    }),
    UsersModule,
    AuthModule,
    FriendRequestModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
