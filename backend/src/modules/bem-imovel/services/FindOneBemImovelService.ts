import AppError from '../../../shared/error/AppError';
import BemImovel from '../infra/typeorm/entities/BemImovel';
import IBemImovelRepository from '../repositories/IBemImovelRepository';

class FindOneImovelService {
  private bemImovelRepository: IBemImovelRepository;

  constructor(bemImovelRepository: IBemImovelRepository) {
    this.bemImovelRepository = bemImovelRepository;
  }

  public async execute(id: string): Promise<BemImovel> {
    const bemImovel = await this.bemImovelRepository.findById(id);

    if (!bemImovel) {
      throw new AppError('Immovable properties does not exist', 404);
    }

    return bemImovel;
  }
}

export default FindOneImovelService;
