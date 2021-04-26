import { getRepository, Repository } from 'typeorm';
import ICreateBemImovelDTO from '../../../dtos/ICreateBemImovelDTO';
import IBemImovelRepository from '../../../repositories/IBemImovelRepository';
import BemImovel from '../entities/BemImovel';

class BemImovelRepository implements IBemImovelRepository {
  private ormRepository: Repository<BemImovel>;

  constructor() {
    this.ormRepository = getRepository(BemImovel);
  }

  public async create(dataBemImovel: ICreateBemImovelDTO): Promise<BemImovel> {
    const bemImovel = this.ormRepository.create(dataBemImovel);

    await this.ormRepository.save(bemImovel);

    return bemImovel;
  }

  public async findAll(): Promise<BemImovel[] | undefined> {
    const bensImoveis = await this.ormRepository.find({
      relations: ['tipo_bem_imovel'],
    });

    return bensImoveis;
  }

  public async findById(id: string): Promise<BemImovel | undefined> {
    const bemImovel = await this.ormRepository
      .createQueryBuilder('bens_imoveis')
      .innerJoinAndSelect('bens_imoveis.tipo_bem_imovel', 'tipos_bens_imoveis')
      .where('bens_imoveis.id = :id', { id })
      .getOne();

    return bemImovel;
  }

  public async save(dataBemImovel: ICreateBemImovelDTO): Promise<void> {
    await this.ormRepository.save(dataBemImovel);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Immovable properties deleted successfully';
  }
}

export default BemImovelRepository;
