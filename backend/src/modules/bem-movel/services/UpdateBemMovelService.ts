import AppError from '../../../shared/error/AppError';
import IUpdateBemMovelDTO from '../dtos/IUpdateBemMovelDTO';
import BemMovel from '../infra/typeorm/entities/BemMovel';
import IBemMovelRepository from '../repositories/IBemMovelRepository';

class UpdateBemMovelService {
  private bemMovelRepository: IBemMovelRepository;

  constructor(bemMovelRepository: IBemMovelRepository) {
    this.bemMovelRepository = bemMovelRepository;
  }

  public async execute({
    id,
    nome,
    valor,
    quantidade,
  }: IUpdateBemMovelDTO): Promise<BemMovel> {
    const bemMovel = await this.bemMovelRepository.findById(id);

    if (!bemMovel) {
      throw new AppError('Mmovable properties does not exist', 404);
    }

    bemMovel.nome = nome;
    bemMovel.valor = valor;
    bemMovel.quantidade = quantidade;

    await this.bemMovelRepository.save(bemMovel);

    return bemMovel;
  }
}

export default UpdateBemMovelService;
