import ICreateProntuarioDTO from '../dtos/ICreateProntuarioDTO';
import Prontuario from '../infra/typeorm/entities/Prontuario';
import IProntuarioRepository from '../repositories/IProntuarioRepository';

class CreateProntuarioService {
  private prontuarioRepository: IProntuarioRepository;

  constructor(prontuarioRepository: IProntuarioRepository) {
    this.prontuarioRepository = prontuarioRepository;
  }

  public async execute({
    motivo_procura,
    dec_hipo,
    data_abertura,
    data_encerramento,
    telefone,
    gasto_familiar,
    status_habitacao,
    status_saude,
    valor_bens_imoveis,
    valor_bens_moveis,
    sinotico,
    acao_id,
    estagiario_id,
    encaminhado_por_id,
    entrevistado_por_id,
  }: ICreateProntuarioDTO): Promise<Prontuario> {
    const prontuario = await this.prontuarioRepository.create({
      motivo_procura,
      dec_hipo,
      data_abertura,
      data_encerramento,
      telefone,
      gasto_familiar,
      status_habitacao,
      status_saude,
      valor_bens_imoveis,
      valor_bens_moveis,
      sinotico,
      acao_id,
      estagiario_id,
      encaminhado_por_id,
      entrevistado_por_id,
    });

    return prontuario;
  }
}

export default CreateProntuarioService;
