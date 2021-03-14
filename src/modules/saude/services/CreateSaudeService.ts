import ICreateSaudeDTO from '../dtos/ICreateSaudeDTO';
import ISaudeRepository from '../repositories/ISaudeRepository';
import Saude from '../infra/typeorm/entities/Saude';

class CreateSaudeService {
  private saudeRepository: ISaudeRepository;

  constructor(saudeRepository: ISaudeRepository) {
    this.saudeRepository = saudeRepository;
  }

  public async execute(dataSaude: ICreateSaudeDTO): Promise<Saude> {
    const saude = await this.saudeRepository.create(dataSaude);

    return saude;
  }
}

export default CreateSaudeService;
