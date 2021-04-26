import AppError from '../../../shared/error/AppError';
import OrcamentoFamiliar from '../infra/typeorm/entities/OrcamentoFamiliar';
import IOrcamentoFamiliarRepository from '../repositories/IOrcamentoFamiliarRepository';

class FindOneOrcamentoFamiliarService {
  private orcamentoFamiliarRepository: IOrcamentoFamiliarRepository;

  constructor(orcamentoFamiliarRepository: IOrcamentoFamiliarRepository) {
    this.orcamentoFamiliarRepository = orcamentoFamiliarRepository;
  }

  public async execute(id: string): Promise<OrcamentoFamiliar | undefined> {
    const orcamentoFamiliar = await this.orcamentoFamiliarRepository.findById(
      id,
    );

    if (!orcamentoFamiliar) {
      throw new AppError('Family budget does not exist', 404);
    }

    return orcamentoFamiliar;
  }
}

export default FindOneOrcamentoFamiliarService;
