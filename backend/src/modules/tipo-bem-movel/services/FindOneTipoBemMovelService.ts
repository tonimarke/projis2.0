import AppError from '../../../shared/error/AppError';
import TipoBemMovel from '../infra/typeorm/entities/TipoBemMovel';
import ITipoBemMovelRepository from '../repositories/ITipoBemMovelRepository';

class FindOneTipoMovelService {
  private tipoBemMovelRepository: ITipoBemMovelRepository;

  constructor(tipoBemMovelRepository: ITipoBemMovelRepository) {
    this.tipoBemMovelRepository = tipoBemMovelRepository;
  }

  public async execute(id: string): Promise<TipoBemMovel> {
    const tipoBemMovel = await this.tipoBemMovelRepository.findById(id);

    if (!tipoBemMovel) {
      throw new AppError('Mmovable properties does not exist', 404);
    }

    return tipoBemMovel;
  }
}

export default FindOneTipoMovelService;
