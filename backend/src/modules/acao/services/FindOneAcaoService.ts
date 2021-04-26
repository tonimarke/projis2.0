import AppError from '../../../shared/error/AppError';
import Acao from '../infra/typeorm/entities/Acao';
import IAcaoRepository from '../repositories/IAcaoRepository';

class FindOneAcaoService {
  private acaoRepository: IAcaoRepository;

  constructor(acaoRepository: IAcaoRepository) {
    this.acaoRepository = acaoRepository;
  }

  public async execute(id: string): Promise<Acao> {
    const acao = await this.acaoRepository.findById(id);

    if (!acao) {
      throw new AppError('Actions does not exist', 404);
    }

    return acao;
  }
}

export default FindOneAcaoService;
