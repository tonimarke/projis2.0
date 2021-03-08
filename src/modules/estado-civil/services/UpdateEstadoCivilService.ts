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

  public async execute({
    id,
    estado_civil,
  }: IRequest): Promise<EstadoCivil | undefined> {
    const estado = await this.estadoCivilRepository.findById(id);

    if (!estado) {
      throw new AppError('Marital status does not exist', 404);
    }

    estado.estado_civil = estado_civil;

    await this.estadoCivilRepository.save(estado);

    return estado;
  }
}

export default UpdateEstadoCivilService;
