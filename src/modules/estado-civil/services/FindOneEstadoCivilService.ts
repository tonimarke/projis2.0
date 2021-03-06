import AppError from '../../../shared/error/AppError';
import EstadoCivil from '../infra/typeorm/entities/EstadoCivil';
import IEstadoCivilRepository from '../repositories/IEstadoCivilRepository';

class FindOneEstadoCivilService {
  private estadoCivilRepository: IEstadoCivilRepository;

  constructor(estadoCilRepository: IEstadoCivilRepository) {
    this.estadoCivilRepository = estadoCilRepository;
  }

  public async execute(id: string): Promise<EstadoCivil | undefined> {
    const estado = await this.estadoCivilRepository.findById(id);

    if (!estado) {
      throw new AppError('Estado civil não exist', 404);
    }

    return estado;
  }
}

export default FindOneEstadoCivilService;
