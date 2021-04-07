import AppError from '../../../shared/error/AppError';
import EstagiarioSupervisor from '../infra/typeorm/entities/EstagiarioSupervisor';
import IEstagiarioSupervisorRepository from '../repositories/IEstagiarioSupervisorRepository';

class FindAllEstagiarioSupervisorService {
  private estagiarioSupervisorRepository: IEstagiarioSupervisorRepository;

  constructor(estagiarioSupervisorRepository: IEstagiarioSupervisorRepository) {
    this.estagiarioSupervisorRepository = estagiarioSupervisorRepository;
  }

  public async execute(): Promise<EstagiarioSupervisor[]> {
    const estagiariosSupervisores = await this.estagiarioSupervisorRepository.findAll();

    if (!estagiariosSupervisores?.length) {
      throw new AppError('Estagiario Supervisor does not exits', 404);
    }

    return estagiariosSupervisores;
  }
}

export default FindAllEstagiarioSupervisorService;
