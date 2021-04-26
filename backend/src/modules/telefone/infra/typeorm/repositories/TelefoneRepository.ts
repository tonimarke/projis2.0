import { getRepository, Repository } from 'typeorm';
import ICreateTelefoneDTO from '../../../dtos/ICreateTelefoneDTO';
import ITelefoneRepository from '../../../repositories/ITelefoneRepository';
import Telefone from '../entities/Telefone';

class TelefoneRepository implements ITelefoneRepository {
  private ormRepository: Repository<Telefone>;

  constructor() {
    this.ormRepository = getRepository(Telefone);
  }

  public async create(dataTelefone: ICreateTelefoneDTO): Promise<Telefone> {
    const telefone = this.ormRepository.create(dataTelefone);

    await this.ormRepository.save(telefone);

    return telefone;
  }

  public async findAll(): Promise<Telefone[] | undefined> {
    const telefones = await this.ormRepository.find();

    return telefones;
  }

  public async findById(id: string): Promise<Telefone | undefined> {
    const telefone = await this.ormRepository.findOne(id);

    return telefone;
  }

  public async findByNumber(numero: string): Promise<Telefone | undefined> {
    const telefone = await this.ormRepository.findOne({ where: { numero } });

    return telefone;
  }

  public async save(dataTelefone: ICreateTelefoneDTO): Promise<void> {
    await this.ormRepository.save(dataTelefone);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Phone deleted with sucessfuly';
  }
}

export default TelefoneRepository;
