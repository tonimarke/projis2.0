import AppError from '../../../shared/error/AppError';
import Prontuario from '../infra/typeorm/entities/Prontuario';
import IProntuarioRepository from '../repositories/IProntuarioRepository';

class FindOneProntuarioService {
  private prontuarioRepository: IProntuarioRepository;

  constructor(prontuarioRepository: IProntuarioRepository) {
    this.prontuarioRepository = prontuarioRepository;
  }

  public async execute(id: string): Promise<Prontuario> {
    const prontuario = await this.prontuarioRepository.findById(id);

    if (!prontuario) {
      throw new AppError('Prontuarios does not exist', 404);
    }

    return prontuario;
  }
}

export default FindOneProntuarioService;
