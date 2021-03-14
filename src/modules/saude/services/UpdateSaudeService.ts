import AppError from '../../../shared/error/AppError';
import Saude from '../infra/typeorm/entities/Saude';
import ISaudeRepository from '../repositories/ISaudeRepository';

interface IRequest {
  id: string;
  interditado: string;
  curador_tutor: string;
  medicamentos: string;
  rede_publica: string;
  observacoes: string;
}

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
  }: IRequest): Promise<Saude> {
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
