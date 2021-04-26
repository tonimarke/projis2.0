import AppError from '../../../shared/error/AppError';
import IBemMovelRepository from '../repositories/IBemMovelRepository';

class DeleteBemMovelService {
  private bemMovelRepository: IBemMovelRepository;

  constructor(bemMovelRepository: IBemMovelRepository) {
    this.bemMovelRepository = bemMovelRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkBemMovelExist = await this.bemMovelRepository.findById(id);

    if (!checkBemMovelExist) {
      throw new AppError('Mmovable properties does not exist', 404);
    }

    const bemMovel = await this.bemMovelRepository.delete(
      checkBemMovelExist.id,
    );

    return bemMovel;
  }
}

export default DeleteBemMovelService;
