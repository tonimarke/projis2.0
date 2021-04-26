import AppError from '../../../shared/error/AppError';
import Acao from '../infra/typeorm/entities/Acao';
import IAcaoRepository from '../repositories/IAcaoRepository';

class FindAllAcaoService {
  private acaoRepository: IAcaoRepository;

  constructor(acaoRepository: IAcaoRepository) {
    this.acaoRepository = acaoRepository;
  }

  public async execute(): Promise<Acao[]> {
    const acoes = await this.acaoRepository.findAll();

    if (!acoes?.length) {
      throw new AppError('Actions does not exist', 404);
    }

    return acoes;
  }
}

export default FindAllAcaoService;
