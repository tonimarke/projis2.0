import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Pessoa from '../../../../pessoa/infra/typeorm/entities/Pessoa';
import TipoAcao from '../../../../tipo-acao/infra/typeorm/entities/TipoAcao';

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

  @ManyToMany(() => TipoAcao)
  @JoinTable({
    name: 'acoes_tipos',
    joinColumns: [{ name: 'acao_id' }],
    inverseJoinColumns: [{ name: 'tipo_id' }],
  })
  tipos_de_acoes: TipoAcao[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Acao;
