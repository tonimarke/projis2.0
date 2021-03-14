import AppError from '../../../shared/error/AppError';
import TipoBemImovel from '../infra/typeorm/entities/TipoBemImovel';
import ITipoBemImovelRepository from '../repositories/ITipoBemImovelRepository';

class FindAllTipoBemImovelService {
  private tipoBemImovelRepository: ITipoBemImovelRepository;

  constructor(tipoBemImovelRepository: ITipoBemImovelRepository) {
    this.tipoBemImovelRepository = tipoBemImovelRepository;
  }

  public async execute(): Promise<TipoBemImovel[]> {
    const tiposBensImoveis = await this.tipoBemImovelRepository.findAll();

    if (!tiposBensImoveis?.length) {
      throw new AppError('Immovable properties does not exist', 404);
    }

    return tiposBensImoveis;
  }
}

export default FindAllTipoBemImovelService;
