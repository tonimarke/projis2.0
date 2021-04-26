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

@Entity('estagiarios_supervisores')
class EstagiarioSupervisor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  estagiario_id: string;

  @Column()
  supervisor_id: string;

  @ManyToOne(() => Pessoa)
  @JoinColumn({ name: 'estagiario_id' })
  estagiario: Pessoa;

  @ManyToOne(() => Pessoa)
  @JoinColumn({ name: 'supervisor_id' })
  supervisor: Pessoa;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default EstagiarioSupervisor;
