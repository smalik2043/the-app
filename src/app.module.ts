import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstitutionModule } from './institution/institution.module';
import { UniversityRepository } from './institution/repository/unversity.repository';
import * as typeOrmConfig from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [],
    useFactory() {
      return {
        ...(typeOrmConfig as any),
      };
    },
    inject: [],
  }), forwardRef(() =>InstitutionModule)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
