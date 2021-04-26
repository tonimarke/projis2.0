import AppError from '../../../shared/error/AppError';
import BemMovel from '../infra/typeorm/entities/BemMovel';
import IBemMovelRepository from '../repositories/IBemMovelRepository';

class FindAllBemMovelService {
  private bemMovelRepository: IBemMovelRepository;

  constructor(bemMovelRepository: IBemMovelRepository) {
    this.bemMovelRepository = bemMovelRepository;
  }

  public async execute(): Promise<BemMovel[]> {
    const bensMoveis = await this.bemMovelRepository.findAll();

    if (!bensMoveis?.length) {
      throw new AppError('Mmovable properties does not exist', 404);
    }

    return bensMoveis;
  }
}

export default FindAllBemMovelService;
