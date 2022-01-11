import { Controller, Get, Param } from '@nestjs/common';
import { ITopInstitution } from './interface';
import { InstitutionService } from './service/institution.service';

@Controller('institution')
export class InstitutionController {
  constructor(private readonly instituionService: InstitutionService) {}

  @Get('/:subjectName')
  getTopInstitutions(@Param('subjectName') subjectName: string): ITopInstitution {
    return this.instituionService.getTopInstituions(subjectName);
  }
}