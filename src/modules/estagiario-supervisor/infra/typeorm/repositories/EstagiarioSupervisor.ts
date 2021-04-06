import { getRepository, Repository } from 'typeorm';
import ICreateEstagiarioSupervisorDTO from '../../../dtos/ICreateEstagiarioSupervisorDTO';
import IEstagiarioSupervisorRepository from '../../../repositories/IEstagiarioSupervisorRepository';
import EstagiarioSupervisor from '../entities/EstagiarioSupervisor';

class EstagiarioSupervisorRepository
  implements IEstagiarioSupervisorRepository {
  private ormRepository: Repository<EstagiarioSupervisor>;

  constructor() {
    this.ormRepository = getRepository(EstagiarioSupervisor);
  }

  public async create(
    dataEstagiarioSupervisor: ICreateEstagiarioSupervisorDTO,
  ): Promise<EstagiarioSupervisor> {
    const estagiarioSupervisor = this.ormRepository.create(
      dataEstagiarioSupervisor,
    );

    await this.ormRepository.save(estagiarioSupervisor);

    return estagiarioSupervisor;
  }

  public async findAll(): Promise<EstagiarioSupervisor[] | undefined> {
    const estariariosSupervisores = await this.ormRepository.find();

    return estariariosSupervisores;
  }

  public async findById(id: string): Promise<EstagiarioSupervisor | undefined> {
    const estagiarioSupervisor = await this.ormRepository.findOne(id);

    return estagiarioSupervisor;
  }

  public async save(
    dataEstagiarioSupervisor: ICreateEstagiarioSupervisorDTO,
  ): Promise<void> {
    await this.ormRepository.save(dataEstagiarioSupervisor);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Estagiario Supervisor deleted successfully';
  }
}

export default EstagiarioSupervisorRepository;
