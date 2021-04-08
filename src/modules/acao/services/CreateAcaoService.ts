import ICreateAcaoDTO from '../dtos/ICreateAcaoDTO';
import Acao from '../infra/typeorm/entities/Acao';
import IAcaoRepository from '../repositories/IAcaoRepository';

class CreateAcaoService {
  private acaoRepository: IAcaoRepository;

  constructor(acaoRepository: IAcaoRepository) {
    this.acaoRepository = acaoRepository;
  }

  public async execute({
    providencias,
    data_atendimento,
    cliente_id,
    parte_contraria_id,
  }: ICreateAcaoDTO): Promise<Acao> {
    const acao = await this.acaoRepository.create({
      providencias,
      data_atendimento,
      cliente_id,
      parte_contraria_id,
    });

    return acao;
  }
}

export default CreateAcaoService;
