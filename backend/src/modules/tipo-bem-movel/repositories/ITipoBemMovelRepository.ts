import ICreateTipoBemMovelDTO from '../dtos/ICreateTipoBemMovelDTO';
import TipoBemMovel from '../infra/typeorm/entities/TipoBemMovel';

export default interface ITipoBemMovelRepository {
  create(dataTipoBemMovel: ICreateTipoBemMovelDTO): Promise<TipoBemMovel>;
  findAll(): Promise<TipoBemMovel[] | undefined>;
  findById(id: string): Promise<TipoBemMovel | undefined>;
  save(dataTipoBemMovel: ICreateTipoBemMovelDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
