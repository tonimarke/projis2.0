import AppError from '../../../shared/error/AppError';
import IUpdateEstagiarioSupervisorDTO from '../dtos/IUpdateEstagiarioSupervisorDTO';
import EstagiarioSupervisor from '../infra/typeorm/entities/EstagiarioSupervisor';
import IEstagiarioSupervisorRepository from '../repositories/IEstagiarioSupervisorRepository';

class UpdateEstagiarioSupervisorService {
  private estagiarioSupervisorRepository: IEstagiarioSupervisorRepository;

  constructor(estagiarioSupervisorRepository: IEstagiarioSupervisorRepository) {
    this.estagiarioSupervisorRepository = estagiarioSupervisorRepository;
  }

  public async execute({
    id,
    estagiario_id,
    supervisor_id,
  }: IUpdateEstagiarioSupervisorDTO): Promise<EstagiarioSupervisor> {
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
