import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import TipoBemMovel from '../../../../tipo-bem-movel/infra/typeorm/entities/TipoBemMovel';

@Entity('bens_moveis')
class BemMovel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  valor: number;

  @Column()
  quantidade: number;

  @Column()
  tipo_bem_movel_id: string;

  @ManyToOne(() => TipoBemMovel)
  @JoinColumn({ name: 'tipo_bem_movel_id' })
  tipo_bem_movel: TipoBemMovel;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default BemMovel;
