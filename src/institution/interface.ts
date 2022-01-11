export interface ISubmission {
    id: string;
    year: number;
    students_total: number;
    undergraduates_total: number;
    postgraduates_total: number;
    staff_total: number;
    academic_papers: number;
    institution_income: number;
    subject_rating: number;
    institution: IInstituion;
}

export interface IInstituion {
    name: string;
    address: string;
    country: string;
    region: string;
    id: string;
}

export interface ITopInstitution {
    topInstitutions: ISubmission[];
}