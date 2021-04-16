import AppError from '../../../shared/error/AppError';
import IProntuarioRepository from '../repositories/IProntuarioRepository';

class DeleteProntuarioService {
  private prontuarioRepository: IProntuarioRepository;

  constructor(prontuarioRepository: IProntuarioRepository) {
    this.prontuarioRepository = prontuarioRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkProntuarioExist = await this.prontuarioRepository.findById(id);

    if (!checkProntuarioExist) {
      throw new AppError('Prontuarios does not exist', 404);
    }

    const prontuario = await this.prontuarioRepository.delete(id);

    return prontuario;
  }
}

export default DeleteProntuarioService;
