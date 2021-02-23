import { uuid } from 'uuidv4';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('estados_civis')
class Estados_civis {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    estado_civil: string;

    @Column('timestamp')
    created_at: Date;

    @Column('timestamp')
    date: Date

}

export default Estados_civis;
