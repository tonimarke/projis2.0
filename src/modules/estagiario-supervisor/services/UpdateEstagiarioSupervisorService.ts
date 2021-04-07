import AppError from '../../../shared/error/AppError';
import EstagiarioSupervisor from '../infra/typeorm/entities/EstagiarioSupervisor';
import IEstagiarioSupervisorRepository from '../repositories/IEstagiarioSupervisorRepository';

interface IRequest {
  id: string;
  estagiario_id: string;
  supervisor_id: string;
}

class UpdateEstagiarioSupervisorService {
  private estagiarioSupervisorRepository: IEstagiarioSupervisorRepository;

  constructor(estagiarioSupervisorRepository: IEstagiarioSupervisorRepository) {
    this.estagiarioSupervisorRepository = estagiarioSupervisorRepository;
  }

  public async execute({
    id,
    estagiario_id,
    supervisor_id,
  }: IRequest): Promise<EstagiarioSupervisor> {
    const estagiarioSupervisor = await this.estagiarioSupervisorRepository.findById(
      id,
    );

    if (!estagiarioSupervisor) {
      throw new AppError('Estagiario Supervisor does not exits', 404);
    }

    estagiarioSupervisor.estagiario_id = estagiario_id;
    estagiarioSupervisor.supervisor_id = supervisor_id;

    await this.estagiarioSupervisorRepository.save(estagiarioSupervisor);

    return estagiarioSupervisor;
  }
}

export default UpdateEstagiarioSupervisorService;
