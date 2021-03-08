import ICreateEnderecoDTO from '../dtos/ICreateEnderecoDTO';
import Endereco from '../infra/typeorm/entities/Endereco';

export default interface IEnderecoRepository {
  create(dataEndereco: ICreateEnderecoDTO): Promise<Endereco>;
  findAll(): Promise<Endereco[] | undefined>;
  findById(id: string): Promise<Endereco | undefined>;
  save(dataEndereco: ICreateEnderecoDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
