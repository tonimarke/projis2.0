import ICreateBemMovelDTO from '../dtos/ICreateBemMovelDTO';
import BemMovel from '../infra/typeorm/entities/BemMovel';

export default interface IBemImovelRepository {
  create(dataBemMovel: ICreateBemMovelDTO): Promise<BemMovel>;
  findAll(): Promise<BemMovel[] | undefined>;
  findById(id: string): Promise<BemMovel | undefined>;
  save(dataBemMovel: ICreateBemMovelDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
