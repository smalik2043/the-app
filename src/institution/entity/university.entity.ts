import { BaseEntity,Column, PrimaryColumn, Entity } from 'typeorm'

@Entity({name: 'institutions'})
export class University extends BaseEntity {

    @PrimaryColumn({
        type: 'uuid',
      })
    id: string;

    @Column()
    country: string;
    
    @Column()
    region: string;

    @Column()
    name: string;

    @Column()
    address: string;
}