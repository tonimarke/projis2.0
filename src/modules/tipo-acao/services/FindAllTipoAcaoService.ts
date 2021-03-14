import AppError from '../../../shared/error/AppError';
import TipoAcao from '../infra/typeorm/entities/TipoAcao';
import ITipoAcaoRepository from '../repositories/ITipoAcaoRepository';

class FindAllTipoAcaoService {
  private tipoAcaoRepository: ITipoAcaoRepository;

  constructor(tipoAcaoRepository: ITipoAcaoRepository) {
    this.tipoAcaoRepository = tipoAcaoRepository;
  }

  public async execute(): Promise<TipoAcao[]> {
    const tiposAcoes = await this.tipoAcaoRepository.findAll();

    if (!tiposAcoes?.length) {
      throw new AppError('Type actions does not exist', 404);
    }

    return tiposAcoes;
  }
}

export default FindAllTipoAcaoService;
