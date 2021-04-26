import AppError from '../../../shared/error/AppError';
import IPessoaRepository from '../repositories/IPessoaRepository';

class DeletePessoaService {
  private pessoaRepository: IPessoaRepository;

  constructor(pessoaRepository: IPessoaRepository) {
    this.pessoaRepository = pessoaRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkPessoaExist = await this.pessoaRepository.findById(id);

    if (!checkPessoaExist) {
      throw new AppError('Person does not exits', 404);
    }

    const pessoa = await this.pessoaRepository.delete(id);

    return pessoa;
  }
}

export default DeletePessoaService;
