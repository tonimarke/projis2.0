import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tipos_bens_imoveis')
class TipoBemImovel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default TipoBemImovel;
