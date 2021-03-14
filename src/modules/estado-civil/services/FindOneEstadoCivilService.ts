import AppError from '../../../shared/error/AppError';
import EstadoCivil from '../infra/typeorm/entities/EstadoCivil';
import IEstadoCivilRepository from '../repositories/IEstadoCivilRepository';

class FindOneEstadoCivilService {
  private estadoCivilRepository: IEstadoCivilRepository;

  constructor(estadoCilRepository: IEstadoCivilRepository) {
    this.estadoCivilRepository = estadoCilRepository;
  }

  public async execute(id: string): Promise<EstadoCivil> {
    const estadosCivis = await this.estadoCivilRepository.findById(id);

    if (!estadosCivis) {
      throw new AppError('Marital status does not exist', 404);
    }

    return estadosCivis;
  }
}

export default FindOneEstadoCivilService;
