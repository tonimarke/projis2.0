import ICreateTelefoneDTO from '../dtos/ICreateTelefoneDTO';
import Telefone from '../infra/typeorm/entities/Telefone';

export default interface ITelefoneRepository {
  create(dataTelefone: ICreateTelefoneDTO): Promise<Telefone>;
  findAll(): Promise<Telefone[] | undefined>;
  findById(id: string): Promise<Telefone | undefined>;
  findByNumber(numero: string): Promise<Telefone | undefined>;
  save(dataTelefone: ICreateTelefoneDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
