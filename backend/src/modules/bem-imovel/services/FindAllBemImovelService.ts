import AppError from '../../../shared/error/AppError';
import BemImovel from '../infra/typeorm/entities/BemImovel';
import IBemImovelRepository from '../repositories/IBemImovelRepository';

class FindAllBemImovelService {
  private bemImovelRepository: IBemImovelRepository;

  constructor(bemImovelRepository: IBemImovelRepository) {
    this.bemImovelRepository = bemImovelRepository;
  }

  public async execute(): Promise<BemImovel[]> {
    const bensImoveis = await this.bemImovelRepository.findAll();

    if (!bensImoveis?.length) {
      throw new AppError('Immovable properties does not exist', 404);
    }

    return bensImoveis;
  }
}

export default FindAllBemImovelService;
