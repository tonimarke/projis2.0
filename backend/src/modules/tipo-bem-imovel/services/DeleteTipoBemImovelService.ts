import AppError from '../../../shared/error/AppError';
import ITipoBemImovelRepository from '../repositories/ITipoBemImovelRepository';

class DeleteTipoBemImovelService {
  private tipoBemImovelRepository: ITipoBemImovelRepository;

  constructor(tipoBemImovelRepository: ITipoBemImovelRepository) {
    this.tipoBemImovelRepository = tipoBemImovelRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkTipoBemImovelExist = await this.tipoBemImovelRepository.findById(
      id,
    );

    if (!checkTipoBemImovelExist) {
      throw new AppError('Type Immovable properties does not exist', 404);
    }

    const tipoBemImovel = await this.tipoBemImovelRepository.delete(
      checkTipoBemImovelExist.id,
    );

    return tipoBemImovel;
  }
}

export default DeleteTipoBemImovelService;
