import ICreatePessoaDTO from '../dtos/ICreatePessoaDTO';
import Pessoa from '../infra/typeorm/entities/Pessoa';

export default interface IPessoaRepository {
  create(dataPessoa: ICreatePessoaDTO): Promise<Pessoa>;
  findAll(): Promise<Pessoa[] | undefined>;
  findById(id: string): Promise<Pessoa | undefined>;
  findByEmail(email: string): Promise<Pessoa | undefined>;
  findByTypePerson(name: string): Promise<Pessoa[] | undefined>;
  findByTypePersonSearch(
    name: string,
    search: string,
  ): Promise<Pessoa[] | undefined>;
  findByTypeESA(): Promise<Pessoa[] | undefined>;
  findByTypeESASearch(search: string): Promise<Pessoa[] | undefined>;
  save(dataPessoa: ICreatePessoaDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
