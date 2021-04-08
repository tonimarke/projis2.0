import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Pessoa from '../../../../pessoa/infra/typeorm/entities/Pessoa';

@Entity('acoes')
class Acao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  providencias: string;

  @Column()
  data_atendimento: Date;

  @Column()
  cliente_id: string;

  @ManyToOne(() => Pessoa)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Pessoa;

  @Column()
  parte_contraria_id: string;

  @ManyToOne(() => Pessoa)
  @JoinColumn({ name: 'parte_contraria_id' })
  parte_contraria: Pessoa;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Acao;
