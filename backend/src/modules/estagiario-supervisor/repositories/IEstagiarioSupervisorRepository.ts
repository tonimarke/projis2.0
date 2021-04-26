import ICreateEstagiarioSupervisorDTO from '../dtos/ICreateEstagiarioSupervisorDTO';
import EstagiarioSupervisor from '../infra/typeorm/entities/EstagiarioSupervisor';

export default interface IEstagiarioSupervisorRepository {
  create(
    dataEstagiarioSupervisor: ICreateEstagiarioSupervisorDTO,
  ): Promise<EstagiarioSupervisor>;
  findAll(): Promise<EstagiarioSupervisor[] | undefined>;
  findById(id: string): Promise<EstagiarioSupervisor | undefined>;
  save(dataEstagiarioSupervisor: ICreateEstagiarioSupervisorDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
