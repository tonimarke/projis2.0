import ICreatePessoaDTO from '../dtos/ICreatePessoaDTO';
import Pessoa from '../infra/typeorm/entities/Pessoa';

export default interface IPessoaRepository {
  create(dataPessoa: ICreatePessoaDTO): Promise<Pessoa>;
  findAll(): Promise<Pessoa[] | undefined>;
  findById(id: string): Promise<Pessoa | undefined>;
  findByEmail(email: string): Promise<Pessoa | undefined>;
  save(dataPessoa: ICreatePessoaDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
