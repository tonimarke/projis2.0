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
    acao_id,
    estagiario_id,
    encaminhado_por_id,
    entrevistado_por_id,
    orcamento_familiar_id,
    habitacao_id,
    declaracao_saude_id,
  }: ICreateProntuarioDTO): Promise<Prontuario> {
    const prontuario = await this.prontuarioRepository.create({
      motivo_procura,
      dec_hipo,
      data_abertura,
      data_encerramento,
      acao_id,
      estagiario_id,
      encaminhado_por_id,
      entrevistado_por_id,
      orcamento_familiar_id,
      habitacao_id,
      declaracao_saude_id,
    });

    return prontuario;
  }
}

export default CreateProntuarioService;
