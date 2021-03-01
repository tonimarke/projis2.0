import { uuid } from 'uuidv4';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('estados_civis')
class Estado_civil {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    estado_civil: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date

}

export default Estado_civil;
