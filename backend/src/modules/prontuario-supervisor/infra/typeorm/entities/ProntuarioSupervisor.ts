import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('prontuarios_supervisores')
class ProntuarioSupervisor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  supervisor_id: string;

  @Column()
  prontuario_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ProntuarioSupervisor;
