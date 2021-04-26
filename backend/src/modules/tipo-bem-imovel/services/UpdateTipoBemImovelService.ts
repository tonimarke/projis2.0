import AppError from '../../../shared/error/AppError';
import IUpdateTipoBemImovelDTO from '../dtos/IUpdateTipoBemImovelDTO';
import TipoBemImovel from '../infra/typeorm/entities/TipoBemImovel';
import ITipoBemImovelRepository from '../repositories/ITipoBemImovelRepository';

class UpdateTipoBemImovelService {
  private tipoBemImovelRepository: ITipoBemImovelRepository;

  constructor(tipoBemImovelRepository: ITipoBemImovelRepository) {
    this.tipoBemImovelRepository = tipoBemImovelRepository;
  }

  public async execute({
    id,
    nome,
  }: IUpdateTipoBemImovelDTO): Promise<TipoBemImovel> {
    const tipoBemImovel = await this.tipoBemImovelRepository.findById(id);

    if (!tipoBemImovel) {
      throw new AppError('Immovable properties does not exist', 404);
    }

    tipoBemImovel.nome = nome;

    await this.tipoBemImovelRepository.save(tipoBemImovel);

    return tipoBemImovel;
  }
}

export default UpdateTipoBemImovelService;
