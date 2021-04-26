import AppError from '../../../shared/error/AppError';
import BemMovel from '../infra/typeorm/entities/BemMovel';
import IBemMovelRepository from '../repositories/IBemMovelRepository';

class FindOneMovelService {
  private bemMovelRepository: IBemMovelRepository;

  constructor(bemMovelRepository: IBemMovelRepository) {
    this.bemMovelRepository = bemMovelRepository;
  }

  public async execute(id: string): Promise<BemMovel> {
    const bemMovel = await this.bemMovelRepository.findById(id);

    if (!bemMovel) {
      throw new AppError('Mmovable properties does not exist', 404);
    }

    return bemMovel;
  }
}

export default FindOneMovelService;
