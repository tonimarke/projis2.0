import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Permissao from '../../../../permissao/infra/typeorm/entities/Permissao';

@Entity('tipos_de_pessoas')
class TipoDePessoa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tipo_de_pessoa: string;

  @ManyToMany(() => Permissao)
  @JoinTable({
    name: 'tipos_de_pessoas_ permissoes',
    joinColumns: [{ name: 'tipo_de_pessoa_id' }],
    inverseJoinColumns: [{ name: 'permissao_id' }],
  })
  permissoes: Permissao[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default TipoDePessoa;
