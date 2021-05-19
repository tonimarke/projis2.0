import AppError from '../../../shared/error/AppError';
import IUpdateAcaoDTO from '../dtos/IUpdateAcaoDTO';
import Acao from '../infra/typeorm/entities/Acao';
import IAcaoRepository from '../repositories/IAcaoRepository';

class UpdateAcaoService {
  private acaoRepository: IAcaoRepository;

  constructor(acaoRepository: IAcaoRepository) {
    this.acaoRepository = acaoRepository;
  }

  public async execute({
    id,
    providencias,
    data_atendimento,
    cliente_id,
    parte_contraria_id,
    tipos_de_acoes,
  }: IUpdateAcaoDTO): Promise<Acao> {
    const acao = await this.acaoRepository.findById(id);

    if (!acao) {
      throw new AppError('Actions does not exist', 404);
    }

    acao.providencias = providencias;
    acao.data_atendimento = data_atendimento;
    acao.cliente_id = cliente_id;
    acao.parte_contraria_id = parte_contraria_id;
    acao.tipos_de_acoes = tipos_de_acoes;

    await this.acaoRepository.save(acao);

    return acao;
  }
}

export default UpdateAcaoService;
