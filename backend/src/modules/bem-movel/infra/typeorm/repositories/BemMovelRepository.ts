import { getRepository, Repository } from 'typeorm';
import ICreateBemMovelDTO from '../../../dtos/ICreateBemMovelDTO';
import IBemMovelRepository from '../../../repositories/IBemMovelRepository';
import BemMovel from '../entities/BemMovel';

class BemMovelRepository implements IBemMovelRepository {
  private ormRepository: Repository<BemMovel>;

  constructor() {
    this.ormRepository = getRepository(BemMovel);
  }

  public async create(dataBemMovel: ICreateBemMovelDTO): Promise<BemMovel> {
    const bemMovel = this.ormRepository.create(dataBemMovel);

    await this.ormRepository.save(bemMovel);

    return bemMovel;
  }

  public async findAll(): Promise<BemMovel[] | undefined> {
    const bensMoveis = await this.ormRepository.find({
      relations: ['tipo_bem_movel'],
    });

    return bensMoveis;
  }

  public async findById(id: string): Promise<BemMovel | undefined> {
    const bemMovel = await this.ormRepository
      .createQueryBuilder('bens_moveis')
      .innerJoinAndSelect('bens_moveis.tipo_bem_movel', 'tipos_bens_moveis')
      .where('bens_moveis.id = :id', { id })
      .getOne();

    return bemMovel;
  }

  public async save(dataBemMovel: ICreateBemMovelDTO): Promise<void> {
    await this.ormRepository.save(dataBemMovel);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Mmovable properties deleted successfully';
  }
}

export default BemMovelRepository;
