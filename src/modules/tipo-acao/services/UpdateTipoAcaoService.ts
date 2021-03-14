import AppError from '../../../shared/error/AppError';
import TipoAcao from '../infra/typeorm/entities/TipoAcao';
import ITipoAcaoRepository from '../repositories/ITipoAcaoRepository';

interface IRequest {
  id: string;
  nome: string;
  descricao: string;
}

class UpdateTipoAcaoService {
  private tipoAcaoRepository: ITipoAcaoRepository;

  constructor(tipoAcaoRepository: ITipoAcaoRepository) {
    this.tipoAcaoRepository = tipoAcaoRepository;
  }

  public async execute({ id, nome, descricao }: IRequest): Promise<TipoAcao> {
    const tipoAcao = await this.tipoAcaoRepository.findById(id);

    if (!tipoAcao) {
      throw new AppError('Type actions does not exist', 404);
    }

    tipoAcao.nome = nome;
    tipoAcao.descricao = descricao;

    await this.tipoAcaoRepository.save(tipoAcao);

    return tipoAcao;
  }
}

export default UpdateTipoAcaoService;
