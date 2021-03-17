import AppError from '../../../shared/error/AppError';
import BemMovel from '../infra/typeorm/entities/BemMovel';
import IBemMovelRepository from '../repositories/IBemMovelRepository';

interface IRequest {
  id: string;
  nome: string;
  valor: number;
  quantidade: number;
}

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
  }: IRequest): Promise<BemMovel> {
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
