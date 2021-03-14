import AppError from '../../../shared/error/AppError';
import ITipoAcaoRepository from '../repositories/ITipoAcaoRepository';

class DeleteTipoAcaoService {
  private tipoAcaoRepository: ITipoAcaoRepository;

  constructor(tipoAcaoRepository: ITipoAcaoRepository) {
    this.tipoAcaoRepository = tipoAcaoRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkTipoAcaoExist = await this.tipoAcaoRepository.findById(id);

    if (!checkTipoAcaoExist) {
      throw new AppError('Type actions does not exist', 404);
    }

    const tipoAcao = await this.tipoAcaoRepository.delete(
      checkTipoAcaoExist.id,
    );

    return tipoAcao;
  }
}

export default DeleteTipoAcaoService;
