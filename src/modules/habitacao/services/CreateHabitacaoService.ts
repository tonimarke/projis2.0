import ICreateHabitacaoDTO from '../dtos/ICreateHabitacaoDTO';
import IHabitacaoRepository from '../repositories/IHabitacaoRepository';
import Habitacao from '../infra/typeorm/entities/Habitacao';

class CreateHabitacaoService {
  private habitacaoRepository: IHabitacaoRepository;

  constructor(habitacaoRepository: IHabitacaoRepository) {
    this.habitacaoRepository = habitacaoRepository;
  }

  public async execute(dataHabitacao: ICreateHabitacaoDTO): Promise<Habitacao> {
    const habitacao = await this.habitacaoRepository.create(dataHabitacao);

    return habitacao;
  }
}

export default CreateHabitacaoService;
