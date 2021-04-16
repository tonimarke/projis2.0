import ICreateProntuarioDTO from '../dtos/ICreateProntuarioDTO';
import Prontuario from '../infra/typeorm/entities/Prontuario';

export default interface IProntuarioRepository {
  create(dataProntuario: ICreateProntuarioDTO): Promise<Prontuario>;
  findAll(): Promise<Prontuario[] | undefined>;
  findById(id: string): Promise<Prontuario | undefined>;
  save(dataProntuario: ICreateProntuarioDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
