import ICreateProntuarioSupervisorDTO from '../dtos/ICreateProntuarioSupervisorDTO';
import ProntuarioSupervisor from '../infra/typeorm/entities/ProntuarioSupervisor';

export default interface IProntuarioSupervisorRepository {
  create(
    dataProntuarioSupervisor: ICreateProntuarioSupervisorDTO,
  ): Promise<ProntuarioSupervisor>;
  findAll(): Promise<ProntuarioSupervisor[] | undefined>;
  findById(id: string): Promise<ProntuarioSupervisor | undefined>;
  save(dataProntuarioSupervisor: ICreateProntuarioSupervisorDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
