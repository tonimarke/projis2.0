import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('orcamentos_familiares')
class OrcamentoFamiliar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  alimentacao: number;

  @Column()
  transporte: number;

  @Column()
  agua: number;

  @Column()
  luz: number;

  @Column()
  telefone: number;

  @Column()
  internet: number;

  @Column()
  aluguel: number;

  @Column()
  convenio_medico: number;

  @Column()
  medicamentos: number;

  @Column()
  educacao: number;

  @Column()
  higiene: number;

  @Column()
  financiamento: number;

  @Column()
  outros: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default OrcamentoFamiliar;
