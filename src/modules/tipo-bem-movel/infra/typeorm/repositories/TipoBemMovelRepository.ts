import { getRepository, Repository } from 'typeorm';
import ICreateTipoBemMovelDTO from '../../../dtos/ICreateTipoBemMovelDTO';
import ITipoBemMovelRepository from '../../../repositories/ITipoBemMovelRepository';
import TipoBemMovel from '../entities/TipoBemMovel';

class TipoBemMovelRepository implements ITipoBemMovelRepository {
  private ormRepository: Repository<TipoBemMovel>;

  constructor() {
    this.ormRepository = getRepository(TipoBemMovel);
  }

  public async create(
    dataTipoBemMovel: ICreateTipoBemMovelDTO,
  ): Promise<TipoBemMovel> {
    const tipoBemMovel = this.ormRepository.create(dataTipoBemMovel);

    await this.ormRepository.save(tipoBemMovel);

    return tipoBemMovel;
  }

  public async findAll(): Promise<TipoBemMovel[] | undefined> {
    const tiposBensMoveis = await this.ormRepository.find();

    return tiposBensMoveis;
  }

  public async findById(id: string): Promise<TipoBemMovel | undefined> {
    const tipoBemMovel = await this.ormRepository.findOne(id);

    return tipoBemMovel;
  }

  public async save(dataTipoBemMovel: ICreateTipoBemMovelDTO): Promise<void> {
    await this.ormRepository.save(dataTipoBemMovel);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Type Mmovable properties deleted successfully';
  }
}

export default TipoBemMovelRepository;
