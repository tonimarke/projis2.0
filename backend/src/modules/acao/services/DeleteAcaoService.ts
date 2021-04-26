import AppError from '../../../shared/error/AppError';
import IAcaoRepository from '../repositories/IAcaoRepository';

class DeleteAcaoService {
  private acaoRepository: IAcaoRepository;

  constructor(acaoRepository: IAcaoRepository) {
    this.acaoRepository = acaoRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkAcaoExist = await this.acaoRepository.findById(id);

    if (!checkAcaoExist) {
      throw new AppError('Actions does not exist', 404);
    }

    const acao = await this.acaoRepository.delete(id);

    return acao;
  }
}

export default DeleteAcaoService;
