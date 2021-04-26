import AppError from '../../../shared/error/AppError';
import Pessoa from '../infra/typeorm/entities/Pessoa';
import IPessoaRepository from '../repositories/IPessoaRepository';

class FindAllPessoaService {
  private pessoaRepository: IPessoaRepository;

  constructor(pessoaRepository: IPessoaRepository) {
    this.pessoaRepository = pessoaRepository;
  }

  public async execute(): Promise<Pessoa[]> {
    const pessoas = await this.pessoaRepository.findAll();

    if (!pessoas?.length) {
      throw new AppError('People does not exits', 404);
    }

    return pessoas;
  }
}

export default FindAllPessoaService;
