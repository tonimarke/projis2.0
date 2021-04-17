import AppError from '../../../shared/error/AppError';
import ProntuarioSupervisor from '../infra/typeorm/entities/ProntuarioSupervisor';
import IProntuarioSupervisorRepository from '../repositories/IProntuarioSupervisorRepository';

class FindAllProntuarioSupervisorService {
  private prontuarioSupervisorRepository: IProntuarioSupervisorRepository;

  constructor(prontuarioSupervisorRepository: IProntuarioSupervisorRepository) {
    this.prontuarioSupervisorRepository = prontuarioSupervisorRepository;
  }

  public async execute(): Promise<ProntuarioSupervisor[]> {
    const prontuarioSupervisor = await this.prontuarioSupervisorRepository.findAll();

    if (!prontuarioSupervisor?.length) {
      throw new AppError('Prontuario Supervisor does not exist', 404);
    }

    return prontuarioSupervisor;
  }
}

export default FindAllProntuarioSupervisorService;
