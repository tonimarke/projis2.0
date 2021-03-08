import AppError from '../../../shared/error/AppError';
import Endereco from '../infra/typeorm/entities/Endereco';
import IEnderecoRepository from '../repositories/IEnderecoRepository';

class FindOneEnderecoService {
  private enderecoRepository: IEnderecoRepository;

  constructor(enderecoRepository: IEnderecoRepository) {
    this.enderecoRepository = enderecoRepository;
  }

  public async execute(id: string): Promise<Endereco | undefined> {
    const endereco = await this.enderecoRepository.findById(id);

    if (!endereco) {
      throw new AppError('Address does not exist', 404);
    }

    return endereco;
  }
}

export default FindOneEnderecoService;
