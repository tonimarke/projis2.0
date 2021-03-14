import AppError from '../../../shared/error/AppError';
import EstadoCivil from '../infra/typeorm/entities/EstadoCivil';
import IEstadoCivilRepository from '../repositories/IEstadoCivilRepository';

interface IRequest {
  id: string;
  estado_civil: string;
}

class UpdateEstadoCivilService {
  private estadoCivilRepository: IEstadoCivilRepository;

  constructor(estadoCilRepository: IEstadoCivilRepository) {
    this.estadoCivilRepository = estadoCilRepository;
  }

  public async execute({ id, estado_civil }: IRequest): Promise<EstadoCivil> {
    const estadoCivil = await this.estadoCivilRepository.findById(id);

    if (!estadoCivil) {
      throw new AppError('Marital status does not exist', 404);
    }

    estadoCivil.estado_civil = estado_civil;

    await this.estadoCivilRepository.save(estadoCivil);

    return estadoCivil;
  }
}

export default UpdateEstadoCivilService;
