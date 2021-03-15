import AppError from '../../../shared/error/AppError';
import IBemImovelRepository from '../repositories/IBemImovelRepository';

class DeleteBemImovelService {
  private bemImovelRepository: IBemImovelRepository;

  constructor(bemImovelRepository: IBemImovelRepository) {
    this.bemImovelRepository = bemImovelRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkBemImovelExist = await this.bemImovelRepository.findById(id);

    if (!checkBemImovelExist) {
      throw new AppError('Immovable properties does not exist', 404);
    }

    const bemImovel = await this.bemImovelRepository.delete(
      checkBemImovelExist.id,
    );

    return bemImovel;
  }
}

export default DeleteBemImovelService;
