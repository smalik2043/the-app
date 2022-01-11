import { Test } from '@nestjs/testing';
import { topUniversitiesBySubjectFixture } from '../fixtures/testFixtures';
import { ITopInstitution } from '../interface';
import { InstitutionService } from '../service/institution.service';

describe('The InstitutionService', () => {
    let institutionService: InstitutionService;
    beforeEach(async () => {
      const module = await Test.createTestingModule({
        providers: [ InstitutionService ],
      })
        .compile();
        institutionService = await module.get(InstitutionService);
    })

    describe('get best institution list by subject', () => {
        describe('best institution list by subject', () => {
          it('should return the best institution list by subject', async () => {
            const subject = 'Chemistry';
            const topInstitionsBySubject: ITopInstitution = await institutionService.getTopInstituions(subject);
            expect(topInstitionsBySubject).toEqual(topUniversitiesBySubjectFixture);
          })
        })
    })
})  