import AppError from '../../../shared/error/AppError';
import EstagiarioSupervisor from '../infra/typeorm/entities/EstagiarioSupervisor';
import IEstagiarioSupervisorRepository from '../repositories/IEstagiarioSupervisorRepository';

class FindOneEstagiarioSupervisorService {
  private estagiarioSupervisorRepository: IEstagiarioSupervisorRepository;

  constructor(estagiarioSupervisorRepository: IEstagiarioSupervisorRepository) {
    this.estagiarioSupervisorRepository = estagiarioSupervisorRepository;
  }

  public async execute(id: string): Promise<EstagiarioSupervisor> {
    const estagiarioSupervisor = await this.estagiarioSupervisorRepository.findById(
      id,
    );

    if (!estagiarioSupervisor) {
      throw new AppError('Estagiario Supervisor does not exits', 404);
    }

    return estagiarioSupervisor;
  }
}

export default FindOneEstagiarioSupervisorService;
