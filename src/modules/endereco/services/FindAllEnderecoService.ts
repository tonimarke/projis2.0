import AppError from '../../../shared/error/AppError';
import Endereco from '../infra/typeorm/entities/Endereco';
import IEnderecoRepository from '../repositories/IEnderecoRepository';

class FindAllEnderecoService {
  private enderecoRepository: IEnderecoRepository;

  constructor(enderecoRepository: IEnderecoRepository) {
    this.enderecoRepository = enderecoRepository;
  }

  public async execute(): Promise<Endereco[] | undefined> {
    const enderecoes = await this.enderecoRepository.findAll();

    if (!enderecoes) {
      throw new AppError('Address does not exist', 404);
    }

    return enderecoes;
  }
}

export default FindAllEnderecoService;
