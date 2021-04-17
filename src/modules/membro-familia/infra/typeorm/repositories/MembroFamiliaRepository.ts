import { getRepository, Repository } from 'typeorm';
import ICreateMembroFamiliaDTO from '../../../dtos/ICreateMembroFamiliaDTO';
import IMembroFamiliaRepository from '../../../repositories/IMembroFamiliaRepository';
import MembroFamilia from '../entities/MembroFamilia';

class MembroFamiliaRepository implements IMembroFamiliaRepository {
  private ormRepository: Repository<MembroFamilia>;

  constructor() {
    this.ormRepository = getRepository(MembroFamilia);
  }

  public async create(
    dataMembroFamilia: ICreateMembroFamiliaDTO,
  ): Promise<MembroFamilia> {
    const membroFamilia = this.ormRepository.create(dataMembroFamilia);

    await this.ormRepository.save(membroFamilia);

    return membroFamilia;
  }

  public async findAll(): Promise<MembroFamilia[] | undefined> {
    const membrosFamilia = await this.ormRepository.find();

    return membrosFamilia;
  }

  public async findById(id: string): Promise<MembroFamilia | undefined> {
    const membroFamilia = await this.ormRepository.findOne(id);

    return membroFamilia;
  }

  public async save(dataMembroFamilia: ICreateMembroFamiliaDTO): Promise<void> {
    await this.ormRepository.save(dataMembroFamilia);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Membro Familia deleted successfully';
  }
}

export default MembroFamiliaRepository;
