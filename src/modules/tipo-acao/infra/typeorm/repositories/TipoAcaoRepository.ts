import { getRepository, Repository } from 'typeorm';
import ICreateTipoAcaoDTO from '../../../dtos/ICreateTipoAcaoDTO';
import ITipoAcaoRepository from '../../../repositories/ITipoAcaoRepository';
import TipoAcao from '../entities/TipoAcao';

class TipoAcaoRepository implements ITipoAcaoRepository {
  private ormRepository: Repository<TipoAcao>;

  constructor() {
    this.ormRepository = getRepository(TipoAcao);
  }

  public async create(dataTipoAcao: ICreateTipoAcaoDTO): Promise<TipoAcao> {
    const tipoAcao = this.ormRepository.create(dataTipoAcao);

    await this.ormRepository.save(tipoAcao);

    return tipoAcao;
  }

  public async findAll(): Promise<TipoAcao[] | undefined> {
    const tiposAcoes = await this.ormRepository.find();

    return tiposAcoes;
  }

  public async findById(id: string): Promise<TipoAcao | undefined> {
    const tipoAcao = await this.ormRepository.findOne(id);

    return tipoAcao;
  }

  public async save(dataTipoAcao: ICreateTipoAcaoDTO): Promise<void> {
    await this.ormRepository.save(dataTipoAcao);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Type action properties deleted successfully';
  }
}

export default TipoAcaoRepository;
