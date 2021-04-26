import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('membros_familia')
class MembroFamilia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  data_nascimento: Date;

  @Column()
  parentesco: string;

  @Column()
  num_filhos: string;

  @Column()
  escolaridade: string;

  @Column()
  ocupacao: string;

  @Column()
  local_trabalho: string;

  @Column()
  salario: string;

  @Column()
  observacao: string;

  @Column()
  estado_civil_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default MembroFamilia;
