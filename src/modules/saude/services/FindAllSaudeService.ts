import AppError from '../../../shared/error/AppError';
import Saude from '../infra/typeorm/entities/Saude';
import ISaudeRepository from '../repositories/ISaudeRepository';

class FindAllSaudeService {
  private saudeRepository: ISaudeRepository;

  constructor(saudeRepository: ISaudeRepository) {
    this.saudeRepository = saudeRepository;
  }

  public async execute(): Promise<Saude[] | undefined> {
    const saudes = await this.saudeRepository.findAll();

    if (!saudes?.length) {
      throw new AppError('Health does not exist', 404);
    }

    return saudes;
  }
}

export default FindAllSaudeService;
