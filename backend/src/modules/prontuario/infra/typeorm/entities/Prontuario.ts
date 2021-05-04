import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Acao from '../../../../acao/infra/typeorm/entities/Acao';
import Pessoa from '../../../../pessoa/infra/typeorm/entities/Pessoa';

@Entity('prontuarios')
class Prontuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  motivo_procura: string;

  @Column()
  dec_hipo: string;

  @Column()
  data_abertura: Date;

  @Column()
  data_encerramento: Date;

  @Column()
  telefone: string;

  @Column()
  gasto_familiar: string;

  @Column()
  status_habitacao: string;

  @Column()
  status_saude: string;

  @Column()
  valor_bens_imoveis: string;

  @Column()
  valor_bens_moveis: string;

  @Column()
  sinotico: string;

  @Column()
  acao_id: string;

  @OneToOne(() => Acao)
  @JoinColumn({ name: 'acao_id' })
  acao: Acao;

  @Column()
  estagiario_id: string;

  @ManyToOne(() => Pessoa)
  @JoinColumn({ name: 'estagiario_id' })
  estagiarios: Pessoa[];

  @Column()
  encaminhado_por_id: string;

  @ManyToOne(() => Pessoa)
  @JoinColumn({ name: 'encaminhado_por_id' })
  encaminhados: Pessoa[];

  @Column()
  entrevistado_por_id: string;

  @ManyToOne(() => Pessoa)
  @JoinColumn({ name: 'entrevistado_por_id' })
  entrevistados: Pessoa[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Prontuario;
