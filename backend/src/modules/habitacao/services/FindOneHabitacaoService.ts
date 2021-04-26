import AppError from '../../../shared/error/AppError';
import Habitacao from '../infra/typeorm/entities/Habitacao';
import IHabitacaoRepository from '../repositories/IHabitacaoRepository';

class FindOneHabitacaoService {
  private habitacaoRepository: IHabitacaoRepository;

  constructor(habitacaoRepository: IHabitacaoRepository) {
    this.habitacaoRepository = habitacaoRepository;
  }

  public async execute(id: string): Promise<Habitacao> {
    const habitacao = await this.habitacaoRepository.findById(id);

    if (!habitacao) {
      throw new AppError('habitation does not exist', 404);
    }

    return habitacao;
  }
}

export default FindOneHabitacaoService;
