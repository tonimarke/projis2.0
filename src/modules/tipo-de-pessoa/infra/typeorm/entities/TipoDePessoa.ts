import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tipos_de_pessoas')
class TipoDePessoa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tipo_de_pessoa: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default TipoDePessoa;
