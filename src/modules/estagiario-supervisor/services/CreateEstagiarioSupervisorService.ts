import ICreateEstagiarioSupervisorDTO from '../dtos/ICreateEstagiarioSupervisorDTO';
import EstagiarioSupervisor from '../infra/typeorm/entities/EstagiarioSupervisor';
import IEstagiarioSupervisorRepository from '../repositories/IEstagiarioSupervisorRepository';

class CreateEstagiarioSupervisorService {
  private estagiarioSupervisorRepository: IEstagiarioSupervisorRepository;

  constructor(estagiarioSupervisorRepository: IEstagiarioSupervisorRepository) {
    this.estagiarioSupervisorRepository = estagiarioSupervisorRepository;
  }

  public async execute({
    estagiario_id,
    supervisor_id,
  }: ICreateEstagiarioSupervisorDTO): Promise<EstagiarioSupervisor> {
    const estagiarioSupervisor = await this.estagiarioSupervisorRepository.create(
      {
        estagiario_id,
        supervisor_id,
      },
    );

    return estagiarioSupervisor;
  }
}

export default CreateEstagiarioSupervisorService;
