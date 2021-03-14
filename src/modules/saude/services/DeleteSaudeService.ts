import AppError from '../../../shared/error/AppError';
import ISaudeRepository from '../repositories/ISaudeRepository';

class DeleteSaudeService {
  private saudeRepository: ISaudeRepository;

  constructor(saudeRepository: ISaudeRepository) {
    this.saudeRepository = saudeRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkSaudeExist = await this.saudeRepository.findById(id);

    if (!checkSaudeExist) {
      throw new AppError('Health does not exist', 404);
    }

    const saude = await this.saudeRepository.delete(checkSaudeExist.id);

    return saude;
  }
}

export default DeleteSaudeService;
