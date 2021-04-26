import AppError from '../../../shared/error/AppError';
import Saude from '../infra/typeorm/entities/Saude';
import ISaudeRepository from '../repositories/ISaudeRepository';

class FindOneSaudeService {
  private saudeRepository: ISaudeRepository;

  constructor(saudeRepository: ISaudeRepository) {
    this.saudeRepository = saudeRepository;
  }

  public async execute(id: string): Promise<Saude | undefined> {
    const saude = await this.saudeRepository.findById(id);

    if (!saude) {
      throw new AppError('Health does not exist', 404);
    }

    return saude;
  }
}

export default FindOneSaudeService;
