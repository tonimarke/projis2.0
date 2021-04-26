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
import Habitacao from '../../../../habitacao/infra/typeorm/entities/Habitacao';
import OrcamentoFamiliar from '../../../../orcamento-familiar/infra/typeorm/entities/OrcamentoFamiliar';
import Pessoa from '../../../../pessoa/infra/typeorm/entities/Pessoa';
import Saude from '../../../../saude/infra/typeorm/entities/Saude';

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

  @Column()
  orcamento_familiar_id: string;

  @OneToOne(() => OrcamentoFamiliar)
  @JoinColumn({ name: 'orcamento_familiar_id' })
  orcamento_familiar: OrcamentoFamiliar;

  @Column()
  habitacao_id: string;

  @OneToOne(() => Habitacao)
  @JoinColumn({ name: 'habitacao_id' })
  habitacao: Habitacao;

  @Column()
  declaracao_saude_id: string;

  @OneToOne(() => Saude)
  @JoinColumn({ name: 'declaracao_saude_id' })
  declaracao_saude: Saude;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Prontuario;
