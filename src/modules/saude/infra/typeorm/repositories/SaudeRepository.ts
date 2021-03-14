import { getRepository, Repository } from 'typeorm';
import ICreateSaudeDTO from '../../../dtos/ICreateSaudeDTO';
import ISaudeRepository from '../../../repositories/ISaudeRepository';
import Saude from '../entities/Saude';

class SaudeRepository implements ISaudeRepository {
  private ormRepository: Repository<Saude>;

  constructor() {
    this.ormRepository = getRepository(Saude);
  }

  public async create(dataSaude: ICreateSaudeDTO): Promise<Saude> {
    const saude = this.ormRepository.create(dataSaude);

    await this.ormRepository.save(saude);

    return saude;
  }

  public async findAll(): Promise<Saude[] | undefined> {
    const saudes = await this.ormRepository.find();

    return saudes;
  }

  public async findById(id: string): Promise<Saude | undefined> {
    const saude = await this.ormRepository.findOne(id);

    return saude;
  }

  public async save(dataSaude: ICreateSaudeDTO): Promise<void> {
    await this.ormRepository.save(dataSaude);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Health deleted successfully';
  }
}

export default SaudeRepository;
