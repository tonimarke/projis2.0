import ICreateBemImovelDTO from '../dtos/ICreateBemImovelDTO';
import BemImovel from '../infra/typeorm/entities/BemImovel';

export default interface IBemImovelRepository {
  create(dataBemImovel: ICreateBemImovelDTO): Promise<BemImovel>;
  findAll(): Promise<BemImovel[] | undefined>;
  findById(id: string): Promise<BemImovel | undefined>;
  save(dataBemImovel: ICreateBemImovelDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
