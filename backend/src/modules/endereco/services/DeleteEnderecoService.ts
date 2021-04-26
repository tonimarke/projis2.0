import AppError from '../../../shared/error/AppError';
import IEnderecoRepository from '../repositories/IEnderecoRepository';

class DeleteEnderecoService {
  private enderecoRepository: IEnderecoRepository;

  constructor(enderecoRepository: IEnderecoRepository) {
    this.enderecoRepository = enderecoRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkAddressExist = await this.enderecoRepository.findById(id);

    if (!checkAddressExist) {
      throw new AppError('Address does not exist', 404);
    }

    const endereco = await this.enderecoRepository.delete(id);

    return endereco;
  }
}

export default DeleteEnderecoService;
