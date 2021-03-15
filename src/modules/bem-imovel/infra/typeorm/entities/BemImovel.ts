import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import TipoBemImovel from '../../../../tipo-bem-imovel/infra/typeorm/entities/TipoBemImovel';

@Entity('bens_imoveis')
class BemImovel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  quantidade: number;

  @Column()
  tipo_bem_imovel_id: string;

  @ManyToOne(() => TipoBemImovel)
  @JoinColumn({ name: 'tipo_bem_imovel_id' })
  tipo_bem_imovel: TipoBemImovel;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default BemImovel;
