import AppError from '../../../shared/error/AppError';
import TipoBemMovel from '../infra/typeorm/entities/TipoBemMovel';
import ITipoBemMovelRepository from '../repositories/ITipoBemMovelRepository';

class FindAllTipoBemMovelService {
  private tipoBemMovelRepository: ITipoBemMovelRepository;

  constructor(tipoBemMovelRepository: ITipoBemMovelRepository) {
    this.tipoBemMovelRepository = tipoBemMovelRepository;
  }

  public async execute(): Promise<TipoBemMovel[]> {
    const tiposBensMoveis = await this.tipoBemMovelRepository.findAll();

    if (!tiposBensMoveis?.length) {
      throw new AppError('Mmovable properties does not exist', 404);
    }

    return tiposBensMoveis;
  }
}

export default FindAllTipoBemMovelService;
