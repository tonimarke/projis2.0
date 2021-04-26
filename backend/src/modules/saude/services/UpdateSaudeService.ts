import AppError from '../../../shared/error/AppError';
import IUpdateSaudeDTO from '../dtos/IUpdateSaudeDTO';
import Saude from '../infra/typeorm/entities/Saude';
import ISaudeRepository from '../repositories/ISaudeRepository';

class UpdateSaudeService {
  private saudeRepository: ISaudeRepository;

  constructor(saudeRepository: ISaudeRepository) {
    this.saudeRepository = saudeRepository;
  }

  public async execute({
    id,
    interditado,
    curador_tutor,
    medicamentos,
    rede_publica,
    observacoes,
  }: IUpdateSaudeDTO): Promise<Saude> {
    const saude = await this.saudeRepository.findById(id);

    if (!saude) {
      throw new AppError('Health does not exist', 404);
    }

    saude.interditado = interditado;
    saude.curador_tutor = curador_tutor;
    saude.medicamentos = medicamentos;
    saude.rede_publica = rede_publica;
    saude.observacoes = observacoes;

    await this.saudeRepository.save(saude);

    return saude;
  }
}

export default UpdateSaudeService;
