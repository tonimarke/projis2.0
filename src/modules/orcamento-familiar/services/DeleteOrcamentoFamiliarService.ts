import AppError from '../../../shared/error/AppError';
import IOrcamentoFamiliarRepository from '../repositories/IOrcamentoFamiliarRepository';

class DeleteOrcamentoFamiliarService {
  private orcamentoFamiliarRepository: IOrcamentoFamiliarRepository;

  constructor(orcamentoFamiliarRepository: IOrcamentoFamiliarRepository) {
    this.orcamentoFamiliarRepository = orcamentoFamiliarRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkOrcamentoFamiliarExist = await this.orcamentoFamiliarRepository.findById(
      id,
    );

    if (!checkOrcamentoFamiliarExist) {
      throw new AppError('Family budget does not exist', 404);
    }

    const orcamentoFamiliar = await this.orcamentoFamiliarRepository.delete(
      checkOrcamentoFamiliarExist.id,
    );

    return orcamentoFamiliar;
  }
}

export default DeleteOrcamentoFamiliarService;
