import AppError from '../../../shared/error/AppError';
import IEstadoCivilRepository from '../repositories/IEstadoCivilRepository';
import EstadoCivil from '../infra/typeorm/entities/EstadoCivil';

class CreateEstadoCivilService {
  private estadoCivilRepository: IEstadoCivilRepository;

  constructor(estadoCilRepository: IEstadoCivilRepository) {
    this.estadoCivilRepository = estadoCilRepository;
  }

  public async execute(estado_civil: string): Promise<EstadoCivil> {
    const checkExistMaritalStatus = await this.estadoCivilRepository.findByName(
      estado_civil,
    );

    if (checkExistMaritalStatus) {
      throw new AppError('Estado civil já existe');
    }

    const estado = await this.estadoCivilRepository.create(estado_civil);

    return estado;
  }
}

export default CreateEstadoCivilService;
