import AppError from '../../../shared/error/AppError';
import ITipoBemMovelRepository from '../repositories/ITipoBemMovelRepository';

class DeleteTipoBemMovelService {
  private tipoBemMovelRepository: ITipoBemMovelRepository;

  constructor(tipoBemMovelRepository: ITipoBemMovelRepository) {
    this.tipoBemMovelRepository = tipoBemMovelRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkTipoBemMovelExist = await this.tipoBemMovelRepository.findById(
      id,
    );

    if (!checkTipoBemMovelExist) {
      throw new AppError('Type Mmovable properties does not exist', 404);
    }

    const tipoBemMovel = await this.tipoBemMovelRepository.delete(
      checkTipoBemMovelExist.id,
    );

    return tipoBemMovel;
  }
}

export default DeleteTipoBemMovelService;
