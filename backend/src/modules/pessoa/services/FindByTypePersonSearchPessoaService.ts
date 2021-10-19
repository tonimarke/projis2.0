import AppError from '../../../shared/error/AppError';
import Pessoa from '../infra/typeorm/entities/Pessoa';
import IPessoaRepository from '../repositories/IPessoaRepository';

class FindByTypePersonSerchPessoaService {
  private pessoaRepository: IPessoaRepository;

  constructor(pessoaRepository: IPessoaRepository) {
    this.pessoaRepository = pessoaRepository;
  }

  public async execute(name: string, search: string): Promise<Pessoa[]> {
    const pessoa = await this.pessoaRepository.findByTypePersonSearch(
      name,
      search,
    );

    if (!pessoa?.length) {
      throw new AppError('Person does not exits', 404);
    }

    return pessoa;
  }
}

export default FindByTypePersonSerchPessoaService;
