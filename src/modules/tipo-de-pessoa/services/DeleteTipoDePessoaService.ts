import AppError from '../../../shared/error/AppError';
import ITipoDePessoaRepository from '../repositories/ITipoDePessoaRepository';

class DeleteTipoDePessoaService {
  private tipoDePessoaRepository: ITipoDePessoaRepository;

  constructor(tipoDePessoaRepository: ITipoDePessoaRepository) {
    this.tipoDePessoaRepository = tipoDePessoaRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkKindOfPersonExist = await this.tipoDePessoaRepository.findById(
      id,
    );

    if (!checkKindOfPersonExist) {
      throw new AppError('Kind of person does not exist', 404);
    }

    const tipoDePessoa = await this.tipoDePessoaRepository.delete(id);

    return tipoDePessoa;
  }
}

export default DeleteTipoDePessoaService;
