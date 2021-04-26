import ICreateTipoBemImovelDTO from '../dtos/ICreateTipoBemImovelDTO';
import TipoBemImovel from '../infra/typeorm/entities/TipoBemImovel';

export default interface ITipoBemImovelRepository {
  create(dataTipoBemImovel: ICreateTipoBemImovelDTO): Promise<TipoBemImovel>;
  findAll(): Promise<TipoBemImovel[] | undefined>;
  findById(id: string): Promise<TipoBemImovel | undefined>;
  save(dataTipoBemImovel: ICreateTipoBemImovelDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
