import AppError from '../../../shared/error/AppError';
import ProntuarioSupervisor from '../infra/typeorm/entities/ProntuarioSupervisor';
import IProntuarioSupervisorRepository from '../repositories/IProntuarioSupervisorRepository';

class FindOneProntuarioSupervisorService {
  private prontuarioSupervisorRepository: IProntuarioSupervisorRepository;

  constructor(prontuarioSupervisorRepository: IProntuarioSupervisorRepository) {
    this.prontuarioSupervisorRepository = prontuarioSupervisorRepository;
  }

  public async execute(id: string): Promise<ProntuarioSupervisor> {
    const prontuarioSupervisor = await this.prontuarioSupervisorRepository.findById(
      id,
    );

    if (!prontuarioSupervisor) {
      throw new AppError('Prontuario Supervisor does not exist', 404);
    }

    return prontuarioSupervisor;
  }
}

export default FindOneProntuarioSupervisorService;
