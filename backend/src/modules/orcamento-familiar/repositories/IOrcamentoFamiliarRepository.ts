import ICreateOrcamentoFamiliarDTO from '../dtos/ICreateOrcamentoFamiliarDTO';
import OrcamentoFamiliar from '../infra/typeorm/entities/OrcamentoFamiliar';

export default interface IOrcamentoFamiliarRepository {
  create(
    dataOrcamentoFamiliar: ICreateOrcamentoFamiliarDTO,
  ): Promise<OrcamentoFamiliar>;
  findAll(): Promise<OrcamentoFamiliar[] | undefined>;
  findById(id: string): Promise<OrcamentoFamiliar | undefined>;
  save(dataOrcamentoFamiliar: ICreateOrcamentoFamiliarDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
