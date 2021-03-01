import { uuid } from 'uuidv4';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('enderecos')
class Endereco {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    logradouro: string;

    @Column()
    numero: string;

    @Column()
    bairro: string;

    @Column()
    complemento: string;

    @Column()
    cep: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date

}

export default Endereco;
