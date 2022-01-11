import { ISubmission, ITopInstitution } from '../interface';
import { submissionsObj } from '../fixtures/submissions';
import { institutionsObj } from '../fixtures/institutions';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InstitutionService {

    /*
        I am using the service layer to do the computation. If I would be using database
        tp store the records and retrieve the records I will use the repository folder to
        query the data with defining the entity layer in a separate entity folder. Just because 
        of time constraints I am evaluating this in the service layer.
    */
    getTopInstituions(subject: string): ITopInstitution {
        if (!subject) {
            return {} as ITopInstitution;
        }

        const { submissions } = submissionsObj;
        const { institutions } = institutionsObj;
        const topInstitionsBySubject: ISubmission[] = [];
        /*
            First filter out the submissions based on the subject and copy them to the new array.
            Then we will sort them out and will display the list.
        */
        submissions.map((submission) => {
            submission.subjects.forEach(sub => {
                if (sub.name === subject) {
                    submission['subject_rating'] = sub.student_rating;
                    /*
                        in order to get the institutions these can be stored in redis for faster retrievel.
                        in this case then we do need to iterate then and hence can be removed.
                    */
                    institutions.forEach(institution => {
                        if (institution.id === submission.institution_id) {
                            submission['institution'] = institution;
                        }
                    })
                    // removing subjects and institution_id as I don't need them now.
                    const { subjects, institution_id, ...newSubmission } = submission; 
                    topInstitionsBySubject.push(newSubmission as ISubmission);
                }
            });
        })
        return  {
            topInstitutions: topInstitionsBySubject.sort((a, b) => b.subject_rating - a.subject_rating)
        }
    }
}