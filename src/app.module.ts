import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log(configService.get('database'));
        return {
          type: 'mysql',
          replication: {
            master: {
              // write
              host: configService.get<string>('database.default.host'),
              port: configService.get<number>('database.default.port'),
              username: configService.get<string>('database.default.username'),
              password: configService.get<string>('database.default.password'),
              database: configService.get<string>('database.default.database'),
            },
            slaves: [
              // readonly
              {
                host: configService.get<string>('database.readonly.host'),
                port: configService.get<number>('database.readonly.port'),
                username: configService.get<string>(
                  'database.readonly.username',
                ),
                password: configService.get<string>(
                  'database.readonly.password',
                ),
                database: configService.get<string>(
                  'database.readonly.database',
                ),
              },
            ],
          },
          entities: [User],
          logging: true,
          synchronize: configService.get<boolean>('database.sync'),
        };
      },
    }),
    TypeOrmModule.forRootAsync({
      name: 'db3',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('database.db3.host'),
        port: configService.get<number>('database.db3.port'),
        username: configService.get<string>('database.db3.username'),
        password: configService.get<string>('database.db3.password'),
        database: configService.get<string>('database.db3.database'),
        entities: [Role],
        logging: true,
        synchronize: configService.get<boolean>('database.sync'),
      }),
    }),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Role], 'db3'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
