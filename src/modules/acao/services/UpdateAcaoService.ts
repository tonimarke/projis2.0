import AppError from '../../../shared/error/AppError';
import Acao from '../infra/typeorm/entities/Acao';
import IAcaoRepository from '../repositories/IAcaoRepository';

interface IRequest {
  id: string;
  providencias: string;
  data_atendimento: Date;
}

class UpdateAcaoService {
  private acaoRepository: IAcaoRepository;

  constructor(acaoRepository: IAcaoRepository) {
    this.acaoRepository = acaoRepository;
  }

  public async execute({
    id,
    providencias,
    data_atendimento,
  }: IRequest): Promise<Acao> {
    const acao = await this.acaoRepository.findById(id);

    if (!acao) {
      throw new AppError('Actions does not exist', 404);
    }

    acao.providencias = providencias;
    acao.data_atendimento = data_atendimento;

    await this.acaoRepository.save(acao);

    return acao;
  }
}

export default UpdateAcaoService;
