import AppError from '../../../shared/error/AppError';
import TipoDePessoa from '../infra/typeorm/entities/TipoDePessoa';
import ITipoDePessoaRepository from '../repositories/ITipoDePessoaRepository';

class FindByNameTipoDePessoaService {
  private tipoDePessoaRepository: ITipoDePessoaRepository;

  constructor(tipoDePessoaRepository: ITipoDePessoaRepository) {
    this.tipoDePessoaRepository = tipoDePessoaRepository;
  }

  public async execute(tipo_de_pessoa: string): Promise<TipoDePessoa> {
    const tipoDePessoa = await this.tipoDePessoaRepository.findByName(
      tipo_de_pessoa,
    );

    if (!tipoDePessoa) {
      throw new AppError('Kind of person does not exist', 404);
    }

    return tipoDePessoa;
  }
}

export default FindByNameTipoDePessoaService;
