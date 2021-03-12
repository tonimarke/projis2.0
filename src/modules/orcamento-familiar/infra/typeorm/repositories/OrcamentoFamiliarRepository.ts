import { getRepository, Repository } from 'typeorm';
import ICreateOrcamentoFamiliarDTO from '../../../dtos/ICreateOrcamentoFamiliarDTO';
import IOrcamentoFamiliarRepository from '../../../repositories/IOrcamentoFamiliarRepository';
import OrcamentoFamiliar from '../entities/OrcamentoFamiliar';

class OrcamentoFamiliarRepository implements IOrcamentoFamiliarRepository {
  private ormRepository: Repository<OrcamentoFamiliar>;

  constructor() {
    this.ormRepository = getRepository(OrcamentoFamiliar);
  }

  public async create(
    dataOrcamentoFamiliar: ICreateOrcamentoFamiliarDTO,
  ): Promise<OrcamentoFamiliar> {
    const orcamentoFamiliar = this.ormRepository.create(dataOrcamentoFamiliar);

    await this.ormRepository.save(orcamentoFamiliar);

    return orcamentoFamiliar;
  }

  public async findAll(): Promise<OrcamentoFamiliar[] | undefined> {
    const orcamentosFamiliares = await this.ormRepository.find();

    return orcamentosFamiliares;
  }

  public async findById(id: string): Promise<OrcamentoFamiliar | undefined> {
    const orcamentoFamiliar = await this.ormRepository.findOne(id);

    return orcamentoFamiliar;
  }

  public async save(
    dataOrcamentoFamiliar: ICreateOrcamentoFamiliarDTO,
  ): Promise<void> {
    await this.ormRepository.save(dataOrcamentoFamiliar);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Family budget deleted successfully';
  }
}

export default OrcamentoFamiliarRepository;
