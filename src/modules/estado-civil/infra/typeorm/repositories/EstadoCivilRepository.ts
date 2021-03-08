import { getRepository, Repository, Like } from 'typeorm';

import IEstadoCivilRepository from '../../../repositories/IEstadoCivilRepository';

import EstadoCivil from '../entities/EstadoCivil';

class EstadoCivilRepository implements IEstadoCivilRepository {
  private ormRepository: Repository<EstadoCivil>;

  constructor() {
    this.ormRepository = getRepository(EstadoCivil);
  }

  public async create(estado_civil: string): Promise<EstadoCivil> {
    const estado = this.ormRepository.create({ estado_civil });

    await this.ormRepository.save(estado);

    return estado;
  }

  public async findAll(): Promise<EstadoCivil[] | undefined> {
    const estados = await this.ormRepository.find();

    return estados;
  }

  public async findByName(
    estado_civil: string,
  ): Promise<EstadoCivil | undefined> {
    const estado = await this.ormRepository.findOne({
      estado_civil: Like(`%${estado_civil}%`),
    });

    return estado;
  }

  public async findById(id: string): Promise<EstadoCivil | undefined> {
    const estado = await this.ormRepository.findOne(id);

    return estado;
  }

  public async save(estado_civil: EstadoCivil): Promise<void> {
    await this.ormRepository.save(estado_civil);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Marital status deleted successfully';
  }
}

export default EstadoCivilRepository;
