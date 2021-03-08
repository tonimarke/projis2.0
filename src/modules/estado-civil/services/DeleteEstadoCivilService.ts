import AppError from '../../../shared/error/AppError';
import IEstadoCivilRepository from '../repositories/IEstadoCivilRepository';

class DeleteEstadoCivilService {
  private estadoCivilRepository: IEstadoCivilRepository;

  constructor(estadoCilRepository: IEstadoCivilRepository) {
    this.estadoCivilRepository = estadoCilRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkExistMaritalStatus = await this.estadoCivilRepository.findById(
      id,
    );

    if (!checkExistMaritalStatus) {
      throw new AppError('Marital status does not exist', 404);
    }

    const estado = await this.estadoCivilRepository.delete(id);

    return estado;
  }
}

export default DeleteEstadoCivilService;
