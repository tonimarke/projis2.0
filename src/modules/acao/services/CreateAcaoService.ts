import ICreateAcaoDTO from '../dtos/ICreateAcaoDTO';
import Acao from '../infra/typeorm/entities/Acao';
import IAcaoRepository from '../repositories/IAcaoRepository';
import ITipoAcaoRepository from '../../tipo-acao/repositories/ITipoAcaoRepository';
import AppError from '../../../shared/error/AppError';

class CreateAcaoService {
  private acaoRepository: IAcaoRepository;

  private tipoAcaoRepository: ITipoAcaoRepository;

  constructor(
    acaoRepository: IAcaoRepository,
    tipoAcaoRepository: ITipoAcaoRepository,
  ) {
    this.acaoRepository = acaoRepository;
    this.tipoAcaoRepository = tipoAcaoRepository;
  }

  public async execute({
    providencias,
    data_atendimento,
    cliente_id,
    parte_contraria_id,
    tipos_de_acoes,
  }: ICreateAcaoDTO): Promise<Acao> {
    const existTiposDeAcaoes = await this.tipoAcaoRepository.findByIds(
      tipos_de_acoes,
    );

    if (!existTiposDeAcaoes) {
      throw new AppError('Tipos de acoes does not exist', 404);
    }

    const acao = await this.acaoRepository.create({
      providencias,
      data_atendimento,
      cliente_id,
      parte_contraria_id,
      tipos_de_acoes: existTiposDeAcaoes,
    });

    return acao;
  }
}

export default CreateAcaoService;
