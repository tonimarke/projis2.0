import AppError from '../../../shared/error/AppError';
import Acao from '../infra/typeorm/entities/Acao';
import IAcaoRepository from '../repositories/IAcaoRepository';

class FindByActionSearchAcaoService {
  private acaoRepository: IAcaoRepository;

  constructor(acaoRepository: IAcaoRepository) {
    this.acaoRepository = acaoRepository;
  }

  public async execute(search: string): Promise<Acao[]> {
    const acoes = await this.acaoRepository.findByActionSearch(search);

    if (!acoes?.length) {
      throw new AppError('Actions does not exist', 404);
    }

    return acoes;
  }
}

export default FindByActionSearchAcaoService;
