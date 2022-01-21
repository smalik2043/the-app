import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionController } from './institution.controller';
import { UniversityRepository } from './repository/unversity.repository';
import { InstitutionService } from './service/institution.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([UniversityRepository])
    ],
    controllers: [InstitutionController],
    providers: [InstitutionService],
    exports: [InstitutionService]
})
export class InstitutionModule {}