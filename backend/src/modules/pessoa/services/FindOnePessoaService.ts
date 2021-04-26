import AppError from '../../../shared/error/AppError';
import Pessoa from '../infra/typeorm/entities/Pessoa';
import IPessoaRepository from '../repositories/IPessoaRepository';

class FindOnePessoaService {
  private pessoaRepository: IPessoaRepository;

  constructor(pessoaRepository: IPessoaRepository) {
    this.pessoaRepository = pessoaRepository;
  }

  public async execute(id: string): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findById(id);

    if (!pessoa) {
      throw new AppError('Person does not exits', 404);
    }

    return pessoa;
  }
}

export default FindOnePessoaService;
