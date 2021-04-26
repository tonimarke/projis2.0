import AppError from '../../../shared/error/AppError';
import IUpdateProntuarioSupervisorDTO from '../dtos/IUpdateProntuarioSupervisorDTO';
import ProntuarioSupervisor from '../infra/typeorm/entities/ProntuarioSupervisor';
import IProntuarioSupervisorRepository from '../repositories/IProntuarioSupervisorRepository';

class UpdateProntuarioSupervisorService {
  private prontuarioSupervisorRepository: IProntuarioSupervisorRepository;

  constructor(prontuarioSupervisorRepository: IProntuarioSupervisorRepository) {
    this.prontuarioSupervisorRepository = prontuarioSupervisorRepository;
  }

  public async execute({
    id,
    supervisor_id,
    prontuario_id,
  }: IUpdateProntuarioSupervisorDTO): Promise<ProntuarioSupervisor> {
    const prontuarioSupervisor = await this.prontuarioSupervisorRepository.findById(
      id,
    );

    if (!prontuarioSupervisor) {
      throw new AppError('Prontuario Supervisor does not exist', 404);
    }

    prontuarioSupervisor.supervisor_id = supervisor_id;
    prontuarioSupervisor.prontuario_id = prontuario_id;

    await this.prontuarioSupervisorRepository.save(prontuarioSupervisor);

    return prontuarioSupervisor;
  }
}

export default UpdateProntuarioSupervisorService;
