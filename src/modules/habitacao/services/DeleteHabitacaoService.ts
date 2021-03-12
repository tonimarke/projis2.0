import AppError from '../../../shared/error/AppError';
import IHabitacaoRepository from '../repositories/IHabitacaoRepository';

class DeleteHabitacaoService {
  private habitacaoRepository: IHabitacaoRepository;

  constructor(habitacaoRepository: IHabitacaoRepository) {
    this.habitacaoRepository = habitacaoRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkHabitacaoExist = await this.habitacaoRepository.findById(id);

    if (!checkHabitacaoExist) {
      throw new AppError('habitation does not exist', 404);
    }

    const hebitacao = await this.habitacaoRepository.delete(
      checkHabitacaoExist.id,
    );

    return hebitacao;
  }
}

export default DeleteHabitacaoService;
