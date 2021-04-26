import AppError from '../../../shared/error/AppError';
import IUpdateTipoDePessoaDTO from '../dtos/IUpdateTipoDePessoaDTO';
import TipoDePessoa from '../infra/typeorm/entities/TipoDePessoa';
import ITipoDePessoaRepository from '../repositories/ITipoDePessoaRepository';

class UpdateTipoDePessoaService {
  private tipoDePessoaRepository: ITipoDePessoaRepository;

  constructor(tipoDePessoaRepository: ITipoDePessoaRepository) {
    this.tipoDePessoaRepository = tipoDePessoaRepository;
  }

  public async execute({
    id,
    tipo_de_pessoa,
  }: IUpdateTipoDePessoaDTO): Promise<TipoDePessoa> {
    const tipoDePessoa = await this.tipoDePessoaRepository.findById(id);

    if (!tipoDePessoa) {
      throw new AppError('Kind of person does not exist', 404);
    }

    tipoDePessoa.tipo_de_pessoa = tipo_de_pessoa;

    await this.tipoDePessoaRepository.save(tipoDePessoa);

    return tipoDePessoa;
  }
}

export default UpdateTipoDePessoaService;
