import AppError from '../../../shared/error/AppError';
import IUpdateProntuarioDTO from '../dtos/IUpdateProntuarioDTO';
import Prontuario from '../infra/typeorm/entities/Prontuario';
import IProntuarioRepository from '../repositories/IProntuarioRepository';

class UpdateProntuarioService {
  private prontuarioRepository: IProntuarioRepository;

  constructor(prontuarioRepository: IProntuarioRepository) {
    this.prontuarioRepository = prontuarioRepository;
  }

  public async execute({
    id,
    motivo_procura,
    dec_hipo,
    data_abertura,
    data_encerramento,
  }: IUpdateProntuarioDTO): Promise<Prontuario> {
    const prontuario = await this.prontuarioRepository.findById(id);

    if (!prontuario) {
      throw new AppError('Prontuarios does not exist', 404);
    }

    prontuario.motivo_procura = motivo_procura;
    prontuario.dec_hipo = dec_hipo;
    prontuario.data_abertura = data_abertura;
    prontuario.data_encerramento = data_encerramento;

    await this.prontuarioRepository.save(prontuario);

    return prontuario;
  }
}

export default UpdateProntuarioService;
