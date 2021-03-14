import ICreateSaudeDTO from '../dtos/ICreateSaudeDTO';
import Saude from '../infra/typeorm/entities/Saude';

export default interface ISaudeRepository {
  create(dataSaude: ICreateSaudeDTO): Promise<Saude>;
  findAll(): Promise<Saude[] | undefined>;
  findById(id: string): Promise<Saude | undefined>;
  save(dataSaude: ICreateSaudeDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
