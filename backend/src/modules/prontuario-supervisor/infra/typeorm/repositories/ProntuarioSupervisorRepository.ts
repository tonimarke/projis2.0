import { getRepository, Repository } from 'typeorm';
import ICreateProntuarioSupervisorDTO from '../../../dtos/ICreateProntuarioSupervisorDTO';
import IProntuarioSupervisorRepository from '../../../repositories/IProntuarioSupervisorRepository';
import ProntuarioSupervisor from '../entities/ProntuarioSupervisor';

class ProntuarioSupervisorRepository
  implements IProntuarioSupervisorRepository {
  private ormRepository: Repository<ProntuarioSupervisor>;

  constructor() {
    this.ormRepository = getRepository(ProntuarioSupervisor);
  }

  public async create(
    dataProntuarioSupervisor: ICreateProntuarioSupervisorDTO,
  ): Promise<ProntuarioSupervisor> {
    const prontuarioSupervisor = this.ormRepository.create(
      dataProntuarioSupervisor,
    );

    await this.ormRepository.save(prontuarioSupervisor);

    return prontuarioSupervisor;
  }

  public async findAll(): Promise<ProntuarioSupervisor[] | undefined> {
    const prontuarioSupervisor = await this.ormRepository.find();

    return prontuarioSupervisor;
  }

  public async findById(id: string): Promise<ProntuarioSupervisor | undefined> {
    const prontuarioSupervisor = await this.ormRepository.findOne(id);

    return prontuarioSupervisor;
  }

  public async save(
    dataProntuarioSupervisor: ICreateProntuarioSupervisorDTO,
  ): Promise<void> {
    await this.ormRepository.save(dataProntuarioSupervisor);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Prontuario Supervisor deleted successfully';
  }
}

export default ProntuarioSupervisorRepository;
