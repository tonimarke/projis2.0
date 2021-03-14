import ICreateTipoAcaoDTO from '../dtos/ICreateTipoAcaoDTO';
import TipoAcao from '../infra/typeorm/entities/TipoAcao';

export default interface ITipoAcaoRepository {
  create(dataTipoAcao: ICreateTipoAcaoDTO): Promise<TipoAcao>;
  findAll(): Promise<TipoAcao[] | undefined>;
  findById(id: string): Promise<TipoAcao | undefined>;
  save(dataTipoAcao: ICreateTipoAcaoDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
