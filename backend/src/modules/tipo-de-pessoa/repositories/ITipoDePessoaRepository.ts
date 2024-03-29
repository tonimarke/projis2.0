import ICreateTipoDePessoaDTO from '../dtos/ICreateTipoDePessoaDTO';
import TipoDePessoa from '../infra/typeorm/entities/TipoDePessoa';

export default interface ITipoDePessoaRepository {
  create(dataTipoDePessoa: ICreateTipoDePessoaDTO): Promise<TipoDePessoa>;
  findAll(): Promise<TipoDePessoa[] | undefined>;
  findById(id: string): Promise<TipoDePessoa | undefined>;
  findByName(tipo_de_pessoa: string): Promise<TipoDePessoa | undefined>;
  save(tipo_de_pessoa: TipoDePessoa): Promise<void>;
  delete(id: string): Promise<string>;
}
