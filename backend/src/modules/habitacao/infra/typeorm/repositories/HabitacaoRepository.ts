import { getRepository, Repository } from 'typeorm';
import ICreateHabitacaoDTO from '../../../dtos/ICreateHabitacaoDTO';
import IHabitacaoRepository from '../../../repositories/IHabitacaoRepository';
import Habitacao from '../entities/Habitacao';

class HabitacaoRepository implements IHabitacaoRepository {
  private ormRepository: Repository<Habitacao>;

  constructor() {
    this.ormRepository = getRepository(Habitacao);
  }

  public async create(dataHabitacao: ICreateHabitacaoDTO): Promise<Habitacao> {
    const habitacao = this.ormRepository.create(dataHabitacao);

    await this.ormRepository.save(habitacao);

    return habitacao;
  }

  public async findAll(): Promise<Habitacao[] | undefined> {
    const habitacoes = await this.ormRepository.find();

    return habitacoes;
  }

  public async findById(id: string): Promise<Habitacao | undefined> {
    const habitacao = await this.ormRepository.findOne(id);

    return habitacao;
  }

  public async save(dataHabitacao: ICreateHabitacaoDTO): Promise<void> {
    await this.ormRepository.save(dataHabitacao);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Habitation deleted successfully';
  }
}

export default HabitacaoRepository;
