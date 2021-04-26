import AppError from '../../../shared/error/AppError';
import IProntuarioSupervisorRepository from '../repositories/IProntuarioSupervisorRepository';

class DeleteProntuarioSupervisorService {
  private prontuarioSupervisorRepository: IProntuarioSupervisorRepository;

  constructor(prontuarioSupervisorRepository: IProntuarioSupervisorRepository) {
    this.prontuarioSupervisorRepository = prontuarioSupervisorRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkProntuarioSupervisorExist = await this.prontuarioSupervisorRepository.findById(
      id,
    );

    if (!checkProntuarioSupervisorExist) {
      throw new AppError('Prontuario Supervisor does not exist', 404);
    }

    const prontuarioSupervisor = await this.prontuarioSupervisorRepository.delete(
      id,
    );

    return prontuarioSupervisor;
  }
}

export default DeleteProntuarioSupervisorService;
