import AppError from '../../../shared/error/AppError';
import EstadoCivil from '../infra/typeorm/entities/EstadoCivil';
import IEstadoCivilRepository from '../repositories/IEstadoCivilRepository';

class FindAllEstadoCivilService {
  private estadoCivilRepository: IEstadoCivilRepository;

  constructor(estadoCilRepository: IEstadoCivilRepository) {
    this.estadoCivilRepository = estadoCilRepository;
  }

  public async execute(): Promise<EstadoCivil[]> {
    const estadoscivis = await this.estadoCivilRepository.findAll();

    if (!estadoscivis?.length) {
      throw new AppError('Marital status does not exist', 404);
    }

    return estadoscivis;
  }
}

export default FindAllEstadoCivilService;
