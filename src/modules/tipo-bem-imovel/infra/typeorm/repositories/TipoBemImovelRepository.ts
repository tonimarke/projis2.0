import { getRepository, Repository } from 'typeorm';
import ICreateTipoBemImovelDTO from '../../../dtos/ICreateTipoBemImovelDTO';
import ITipoBemImovelRepository from '../../../repositories/ITipoBemImovelRepository';
import TipoBemImovel from '../entities/TipoBemImovel';

class TipoBemImovelRepository implements ITipoBemImovelRepository {
  private ormRepository: Repository<TipoBemImovel>;

  constructor() {
    this.ormRepository = getRepository(TipoBemImovel);
  }

  public async create(
    dataTipoBemImovel: ICreateTipoBemImovelDTO,
  ): Promise<TipoBemImovel> {
    const tipoBemImovel = this.ormRepository.create(dataTipoBemImovel);

    await this.ormRepository.save(tipoBemImovel);

    return tipoBemImovel;
  }

  public async findAll(): Promise<TipoBemImovel[] | undefined> {
    const tiposBensImoveis = await this.ormRepository.find();

    return tiposBensImoveis;
  }

  public async findById(id: string): Promise<TipoBemImovel | undefined> {
    const tipoBemImovel = await this.ormRepository.findOne(id);

    return tipoBemImovel;
  }

  public async save(dataTipoBemImovel: ICreateTipoBemImovelDTO): Promise<void> {
    await this.ormRepository.save(dataTipoBemImovel);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Type Immovable properties deleted successfully';
  }
}

export default TipoBemImovelRepository;
