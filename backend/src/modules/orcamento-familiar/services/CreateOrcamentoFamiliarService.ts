import ICreateOrcamentoFamiliarDTO from '../dtos/ICreateOrcamentoFamiliarDTO';
import IOrcamentoFamiliarRepository from '../repositories/IOrcamentoFamiliarRepository';
import OrcamentoFamiliar from '../infra/typeorm/entities/OrcamentoFamiliar';

class CreateOrcamentoFamiliarService {
  private orcamentoFamiliarRepository: IOrcamentoFamiliarRepository;

  constructor(orcamentoFamiliarRepository: IOrcamentoFamiliarRepository) {
    this.orcamentoFamiliarRepository = orcamentoFamiliarRepository;
  }

  public async execute(
    dataOrcamentoFamiliar: ICreateOrcamentoFamiliarDTO,
  ): Promise<OrcamentoFamiliar> {
    const orcamentoFamiliar = await this.orcamentoFamiliarRepository.create(
      dataOrcamentoFamiliar,
    );

    return orcamentoFamiliar;
  }
}

export default CreateOrcamentoFamiliarService;
