import AppError from '../../../shared/error/AppError';
import TipoDePessoa from '../infra/typeorm/entities/TipoDePessoa';
import ITipoDePessoaRepository from '../repositories/ITipoDePessoaRepository';

class FindOneTipoDePessoaService {
  private tipoDePessoaRepository: ITipoDePessoaRepository;

  constructor(tipoDePessoaRepository: ITipoDePessoaRepository) {
    this.tipoDePessoaRepository = tipoDePessoaRepository;
  }

  public async execute(id: string): Promise<TipoDePessoa> {
    const tipoDePessoa = await this.tipoDePessoaRepository.findById(id);

    if (!tipoDePessoa) {
      throw new AppError('Kind of person does not exist', 404);
    }

    return tipoDePessoa;
  }
}

export default FindOneTipoDePessoaService;
