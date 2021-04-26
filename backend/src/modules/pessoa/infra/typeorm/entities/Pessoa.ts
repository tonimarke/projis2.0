import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Endereco from '../../../../endereco/infra/typeorm/entities/Endereco';
import EstadoCivil from '../../../../estado-civil/infra/typeorm/entities/EstadoCivil';
import TipoDePessoa from '../../../../tipo-de-pessoa/infra/typeorm/entities/TipoDePessoa';

@Entity('pessoas')
class Pessoa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  rg: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  estado_civil_id: string;

  @ManyToOne(() => EstadoCivil)
  @JoinColumn({ name: 'estado_civil_id' })
  estado_civil: string;

  @Column()
  nome_pai: string;

  @Column()
  nome_mae: string;

  @Column()
  data_nascimento: Date;

  @Column()
  endereco_id: string;

  @OneToOne(() => Endereco)
  @JoinColumn({ name: 'endereco_id' })
  endereco: Endereco;

  @Column()
  religiao: string;

  @Column()
  previdencia_social: string;

  @Column()
  bpc: string;

  @Column()
  sindicalizado: string;

  @Column()
  situacao: string;

  @Column()
  observacoes: string;

  @Column()
  inicio_vinculo: Date;

  @Column()
  termino_vinculo: Date;

  @Column()
  curso: string;

  @Column()
  periodo: string;

  @Column()
  profissao: string;

  @Column()
  oab: string;

  @Column()
  ocupacao: string;

  @Column()
  tipo_de_pessoa_id: string;

  @ManyToOne(() => TipoDePessoa)
  @JoinColumn({ name: 'tipo_de_pessoa_id' })
  tipo_de_pessoa: TipoDePessoa;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Pessoa;
