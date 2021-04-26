import AppError from '../../../shared/error/AppError';
import OrcamentoFamiliar from '../infra/typeorm/entities/OrcamentoFamiliar';
import IOrcamentoFamiliarRepository from '../repositories/IOrcamentoFamiliarRepository';

class FindAllOrcamentoFamiliarService {
  private orcamentoFamiliarRepository: IOrcamentoFamiliarRepository;

  constructor(orcamentoFamiliarRepository: IOrcamentoFamiliarRepository) {
    this.orcamentoFamiliarRepository = orcamentoFamiliarRepository;
  }

  public async execute(): Promise<OrcamentoFamiliar[]> {
    const orcamentoFamiliar = await this.orcamentoFamiliarRepository.findAll();

    if (!orcamentoFamiliar?.length) {
      throw new AppError('Family budget does not exist', 404);
    }

    return orcamentoFamiliar;
  }
}

export default FindAllOrcamentoFamiliarService;
