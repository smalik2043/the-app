import { Module } from '@nestjs/common';
import { InstitutionController } from './institution.controller';
import { InstitutionService } from './service/institution.service';

@Module({
    controllers: [InstitutionController],
    providers: [InstitutionService],
    exports: [InstitutionService]
})
export class InstitutionModule {}