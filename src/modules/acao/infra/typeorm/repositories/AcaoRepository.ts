import { getRepository, Repository } from 'typeorm';
import ICreateAcaoDTO from '../../../dtos/ICreateAcaoDTO';
import IAcaoRepository from '../../../repositories/IAcaoRepository';
import Acao from '../entities/Acao';

class AcaoRepository implements IAcaoRepository {
  private ormRepository: Repository<Acao>;

  constructor() {
    this.ormRepository = getRepository(Acao);
  }

  public async create(dataAcao: ICreateAcaoDTO): Promise<Acao> {
    const acao = this.ormRepository.create(dataAcao);

    await this.ormRepository.save(acao);

    return acao;
  }

  public async findAll(): Promise<Acao[] | undefined> {
    const acoes = await this.ormRepository.find();

    return acoes;
  }

  public async findById(id: string): Promise<Acao | undefined> {
    const acao = await this.ormRepository.findOne(id);

    return acao;
  }

  public async save(dataAcao: ICreateAcaoDTO): Promise<void> {
    await this.ormRepository.save(dataAcao);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Action deleted successfully';
  }
}

export default AcaoRepository;
