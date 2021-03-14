import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('saudes')
class Saude {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  interditado: string;

  @Column()
  curador_tutor: string;

  @Column()
  medicamentos: string;

  @Column()
  rede_publica: string;

  @Column()
  observacoes: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Saude;
