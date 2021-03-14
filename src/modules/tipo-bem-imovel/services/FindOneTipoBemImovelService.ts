import AppError from '../../../shared/error/AppError';
import TipoBemImovel from '../infra/typeorm/entities/TipoBemImovel';
import ITipoBemImovelRepository from '../repositories/ITipoBemImovelRepository';

class FindOneTipoImovelService {
  private tipoBemImovelRepository: ITipoBemImovelRepository;

  constructor(tipoBemImovelRepository: ITipoBemImovelRepository) {
    this.tipoBemImovelRepository = tipoBemImovelRepository;
  }

  public async execute(id: string): Promise<TipoBemImovel> {
    const tipoBemImovel = await this.tipoBemImovelRepository.findById(id);

    if (!tipoBemImovel) {
      throw new AppError('Immovable properties does not exist', 404);
    }

    return tipoBemImovel;
  }
}

export default FindOneTipoImovelService;
