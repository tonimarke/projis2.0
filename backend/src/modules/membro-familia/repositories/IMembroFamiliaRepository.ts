import ICreateMembroFamiliaDTO from '../dtos/ICreateMembroFamiliaDTO';
import MembroFamilia from '../infra/typeorm/entities/MembroFamilia';

export default interface IMembroFamiliaRepository {
  create(dataMembroFamilia: ICreateMembroFamiliaDTO): Promise<MembroFamilia>;
  findAll(): Promise<MembroFamilia[] | undefined>;
  findById(id: string): Promise<MembroFamilia | undefined>;
  save(dataMembroFamilia: ICreateMembroFamiliaDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
