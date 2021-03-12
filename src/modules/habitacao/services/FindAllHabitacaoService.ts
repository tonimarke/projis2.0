import AppError from '../../../shared/error/AppError';
import Habitacao from '../infra/typeorm/entities/Habitacao';
import IHabitacaoRepository from '../repositories/IHabitacaoRepository';

class FindAllHabitacaoService {
  private habitacaoRepository: IHabitacaoRepository;

  constructor(habitacaoRepository: IHabitacaoRepository) {
    this.habitacaoRepository = habitacaoRepository;
  }

  public async execute(): Promise<Habitacao[]> {
    const habitacoes = await this.habitacaoRepository.findAll();

    if (!habitacoes) {
      throw new AppError('habitation does not exist', 404);
    }

    return habitacoes;
  }
}

export default FindAllHabitacaoService;
