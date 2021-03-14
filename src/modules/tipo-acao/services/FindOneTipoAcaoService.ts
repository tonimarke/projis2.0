import AppError from '../../../shared/error/AppError';
import TipoAcao from '../infra/typeorm/entities/TipoAcao';
import ITipoAcaoRepository from '../repositories/ITipoAcaoRepository';

class FindOneTipoAcaoService {
  private tipoAcaoRepository: ITipoAcaoRepository;

  constructor(tipoAcaoRepository: ITipoAcaoRepository) {
    this.tipoAcaoRepository = tipoAcaoRepository;
  }

  public async execute(id: string): Promise<TipoAcao> {
    const tipoAcao = await this.tipoAcaoRepository.findById(id);

    if (!tipoAcao) {
      throw new AppError('Type actions does not exist', 404);
    }

    return tipoAcao;
  }
}

export default FindOneTipoAcaoService;
