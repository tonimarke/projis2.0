import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import TipoDePessoa from '../../../../tipo-de-pessoa/infra/typeorm/entities/TipoDePessoa';

@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  tipo_de_pessoa_id: string;

  @ManyToOne(() => TipoDePessoa)
  @JoinColumn({ name: 'tipo_de_pessoa_id' })
  tipo_de_pessoa: TipoDePessoa[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Usuario;
