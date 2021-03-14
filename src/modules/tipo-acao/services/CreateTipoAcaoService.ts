import ICreateTipoAcaoDTO from '../dtos/ICreateTipoAcaoDTO';
import TipoAcao from '../infra/typeorm/entities/TipoAcao';
import ITipoAcaoRepository from '../repositories/ITipoAcaoRepository';

class CreateTipoAcaoService {
  private tipoAcaoRepository: ITipoAcaoRepository;

  constructor(tipoAcaoRepository: ITipoAcaoRepository) {
    this.tipoAcaoRepository = tipoAcaoRepository;
  }

  public async execute({
    nome,
    descricao,
  }: ICreateTipoAcaoDTO): Promise<TipoAcao> {
    const tipoAcao = await this.tipoAcaoRepository.create({
      nome,
      descricao,
    });

    return tipoAcao;
  }
}

export default CreateTipoAcaoService;
