import EstadoCivil from '../infra/typeorm/entities/EstadoCivil';
import IEstadoCivilRepository from '../repositories/IEstadoCivilRepository';

class FindAllEstadoCivilService {
  private estadoCivilRepository: IEstadoCivilRepository;

  constructor(estadoCilRepository: IEstadoCivilRepository) {
    this.estadoCivilRepository = estadoCilRepository;
  }

  public async execute(): Promise<EstadoCivil[] | undefined> {
    const estados = await this.estadoCivilRepository.findAll();

    return estados;
  }
}

export default FindAllEstadoCivilService;
