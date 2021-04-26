import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('habitacoes')
class Habitacao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  situacao: string;

  @Column()
  valor_aluguel: number;

  @Column()
  quantidade_dormitorios: number;

  @Column()
  quantidade_salas: number;

  @Column()
  quantidade_copas: number;

  @Column()
  quantidade_cozinhas: number;

  @Column()
  quantidade_areas_servico: number;

  @Column()
  quantidade_garagens: number;

  @Column()
  pintura: string;

  @Column()
  piso: string;

  @Column()
  contra_piso: number;

  @Column()
  laje: number;

  @Column()
  forro_madeira: number;

  @Column()
  sem_forro: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Habitacao;
