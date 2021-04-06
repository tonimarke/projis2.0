import AppError from '../../../shared/error/AppError';
import IEstagiarioSupervisorRepository from '../repositories/IEstagiarioSupervisorRepository';

class DeleteEstagiarioSupervisorService {
  private estagiarioSupervisorRepository: IEstagiarioSupervisorRepository;

  constructor(estagiarioSupervisorRepository: IEstagiarioSupervisorRepository) {
    this.estagiarioSupervisorRepository = estagiarioSupervisorRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkEstagiarioSupervisorExist = await this.estagiarioSupervisorRepository.findById(
      id,
    );

    if (!checkEstagiarioSupervisorExist) {
      throw new AppError('Estagiario Supervisor does not exits', 404);
    }

    const estagiarioSupervisor = await this.estagiarioSupervisorRepository.delete(
      id,
    );

    return estagiarioSupervisor;
  }
}

export default DeleteEstagiarioSupervisorService;
