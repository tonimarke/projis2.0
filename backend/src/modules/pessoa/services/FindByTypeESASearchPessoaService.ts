import AppError from '../../../shared/error/AppError';
import Pessoa from '../infra/typeorm/entities/Pessoa';
import IPessoaRepository from '../repositories/IPessoaRepository';

class FindByTypeESASearchPessoaService {
  private pessoaRepository: IPessoaRepository;

  constructor(pessoaRepository: IPessoaRepository) {
    this.pessoaRepository = pessoaRepository;
  }

  public async execute(search: string): Promise<Pessoa[]> {
    const pessoa = await this.pessoaRepository.findByTypeESASearch(search);

    if (!pessoa?.length) {
      throw new AppError('Person does not exits', 404);
    }

    return pessoa;
  }
}

export default FindByTypeESASearchPessoaService;
