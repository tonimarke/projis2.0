import { getRepository, Repository } from 'typeorm';
import ICreateProntuarioDTO from '../../../dtos/ICreateProntuarioDTO';
import IProntuarioRepository from '../../../repositories/IProntuarioRepository';
import Prontuario from '../entities/Prontuario';

class ProntuarioRepository implements IProntuarioRepository {
  private ormRepository: Repository<Prontuario>;

  constructor() {
    this.ormRepository = getRepository(Prontuario);
  }

  public async create(
    dataProntuario: ICreateProntuarioDTO,
  ): Promise<Prontuario> {
    const prontuario = this.ormRepository.create(dataProntuario);

    await this.ormRepository.save(prontuario);

    return prontuario;
  }

  public async findAll(): Promise<Prontuario[] | undefined> {
    const prontuarios = await this.ormRepository.find();

    return prontuarios;
  }

  public async findById(id: string): Promise<Prontuario | undefined> {
    const prontuario = await this.ormRepository.findOne(id);

    return prontuario;
  }

  public async save(dataProntuario: ICreateProntuarioDTO): Promise<void> {
    await this.ormRepository.save(dataProntuario);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Prontuario deleted with succefully';
  }
}

export default ProntuarioRepository;
