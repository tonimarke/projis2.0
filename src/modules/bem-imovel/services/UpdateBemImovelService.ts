import AppError from '../../../shared/error/AppError';
import BemImovel from '../infra/typeorm/entities/BemImovel';
import IBemImovelRepository from '../repositories/IBemImovelRepository';

interface IRequest {
  id: string;
  nome: string;
  quantidade: number;
}

class UpdateBemImovelService {
  private bemImovelRepository: IBemImovelRepository;

  constructor(bemImovelRepository: IBemImovelRepository) {
    this.bemImovelRepository = bemImovelRepository;
  }

  public async execute({ id, nome, quantidade }: IRequest): Promise<BemImovel> {
    const bemImovel = await this.bemImovelRepository.findById(id);

    if (!bemImovel) {
      throw new AppError('Immovable properties does not exist', 404);
    }

    bemImovel.nome = nome;
    bemImovel.quantidade = quantidade;

    await this.bemImovelRepository.save(bemImovel);

    return bemImovel;
  }
}

export default UpdateBemImovelService;
