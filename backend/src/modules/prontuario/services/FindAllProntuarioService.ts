import AppError from '../../../shared/error/AppError';
import Prontuario from '../infra/typeorm/entities/Prontuario';
import IProntuarioRepository from '../repositories/IProntuarioRepository';

class FindAllProntuarioService {
  private prontuarioRepository: IProntuarioRepository;

  constructor(prontuarioRepository: IProntuarioRepository) {
    this.prontuarioRepository = prontuarioRepository;
  }

  public async execute(): Promise<Prontuario[]> {
    const prontuarios = await this.prontuarioRepository.findAll();

    if (!prontuarios?.length) {
      throw new AppError('Prontuarios does not exist', 404);
    }

    return prontuarios;
  }
}

export default FindAllProntuarioService;
