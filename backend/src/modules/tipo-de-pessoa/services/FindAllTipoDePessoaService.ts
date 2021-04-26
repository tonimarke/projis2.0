import AppError from '../../../shared/error/AppError';
import TipoDePessoa from '../infra/typeorm/entities/TipoDePessoa';
import ITipoDePessoaRepository from '../repositories/ITipoDePessoaRepository';

class FindAllTipoDePessoaService {
  private tipoDePessoaRepository: ITipoDePessoaRepository;

  constructor(tipoDePessoaRepository: ITipoDePessoaRepository) {
    this.tipoDePessoaRepository = tipoDePessoaRepository;
  }

  public async execute(): Promise<TipoDePessoa[]> {
    const tiposDePessoa = await this.tipoDePessoaRepository.findAll();

    if (!tiposDePessoa?.length) {
      throw new AppError('Kind of person does not exist', 404);
    }

    return tiposDePessoa;
  }
}

export default FindAllTipoDePessoaService;
