import { EntityRepository, Repository } from "typeorm";
import { University } from "../entity/university.entity";


@EntityRepository(University)
export class UniversityRepository extends Repository<University>{
}