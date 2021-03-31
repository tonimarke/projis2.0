import AppError from '../../../shared/error/AppError';
import TipoDePessoa from '../infra/typeorm/entities/TipoDePessoa';
import ITipoDePessoaRepository from '../repositories/ITipoDePessoaRepository';

class CreateTipoDePessoaService {
  private tipoDePessoaRepository: ITipoDePessoaRepository;

  constructor(tipoDePessoaRepository: ITipoDePessoaRepository) {
    this.tipoDePessoaRepository = tipoDePessoaRepository;
  }

  public async execute(tipo_de_pessoa: string): Promise<TipoDePessoa> {
    const checkKindOfPersonExist = await this.tipoDePessoaRepository.findByName(
      tipo_de_pessoa,
    );

    if (checkKindOfPersonExist) {
      throw new AppError('Kind of person already exist');
    }

    const tipo = await this.tipoDePessoaRepository.create(tipo_de_pessoa);

    return tipo;
  }
}

export default CreateTipoDePessoaService;
