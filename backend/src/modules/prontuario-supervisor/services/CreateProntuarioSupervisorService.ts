import ICreateProntuarioSupervisorDTO from '../dtos/ICreateProntuarioSupervisorDTO';
import ProntuarioSupervisor from '../infra/typeorm/entities/ProntuarioSupervisor';
import IProntuarioSupervisorRepository from '../repositories/IProntuarioSupervisorRepository';

class CreateProntuarioSupervisorService {
  private prontuarioSupervisorRepository: IProntuarioSupervisorRepository;

  constructor(prontuarioSupervisorRepository: IProntuarioSupervisorRepository) {
    this.prontuarioSupervisorRepository = prontuarioSupervisorRepository;
  }

  public async execute(
    dataProntuarioSupervisor: ICreateProntuarioSupervisorDTO,
  ): Promise<ProntuarioSupervisor> {
    const prontuarioSupervisor = await this.prontuarioSupervisorRepository.create(
      dataProntuarioSupervisor,
    );

    return prontuarioSupervisor;
  }
}

export default CreateProntuarioSupervisorService;
