import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Prontuario from '../../../../prontuario/infra/typeorm/entities/Prontuario';
import TipoBemImovel from '../../../../tipo-bem-imovel/infra/typeorm/entities/TipoBemImovel';

@Entity('bens_imoveis')
class BemImovel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  valor: number;

  @Column()
  quantidade: number;

  @Column()
  tipo_bem_imovel_id: string;

  @ManyToOne(() => TipoBemImovel)
  @JoinColumn({ name: 'tipo_bem_imovel_id' })
  tipo_bem_imovel: TipoBemImovel;

  @Column()
  prontuario_id: string;

  @ManyToOne(() => Prontuario)
  @JoinColumn({ name: 'prontuario_id' })
  prontuario: Prontuario[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default BemImovel;
