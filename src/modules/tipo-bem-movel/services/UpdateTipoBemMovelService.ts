import AppError from '../../../shared/error/AppError';
import TipoBemMovel from '../infra/typeorm/entities/TipoBemMovel';
import ITipoBemMovelRepository from '../repositories/ITipoBemMovelRepository';

interface IRequest {
  id: string;
  nome: string;
}

class UpdateTipoBemMovelService {
  private tipoBemMovelRepository: ITipoBemMovelRepository;

  constructor(tipoBemMovelRepository: ITipoBemMovelRepository) {
    this.tipoBemMovelRepository = tipoBemMovelRepository;
  }

  public async execute({ id, nome }: IRequest): Promise<TipoBemMovel> {
    const tipoBemMovel = await this.tipoBemMovelRepository.findById(id);

    if (!tipoBemMovel) {
      throw new AppError('Immovable properties does not exist', 404);
    }

    tipoBemMovel.nome = nome;

    await this.tipoBemMovelRepository.save(tipoBemMovel);

    return tipoBemMovel;
  }
}

export default UpdateTipoBemMovelService;
