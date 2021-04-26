import ICreateAcaoDTO from '../dtos/ICreateAcaoDTO';
import Acao from '../infra/typeorm/entities/Acao';

export default interface IAcaoRepository {
  create(dataAcao: ICreateAcaoDTO): Promise<Acao>;
  findAll(): Promise<Acao[] | undefined>;
  findById(id: string): Promise<Acao | undefined>;
  save(dataAcao: ICreateAcaoDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
