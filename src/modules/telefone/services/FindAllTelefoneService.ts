import AppError from '../../../shared/error/AppError';
import Telefone from '../infra/typeorm/entities/Telefone';
import ITelefoneRepository from '../repositories/ITelefoneRepository';

class FindAllTelefoneService {
  private telefoneRepository: ITelefoneRepository;

  constructor(telefoneRepository: ITelefoneRepository) {
    this.telefoneRepository = telefoneRepository;
  }

  public async execute(): Promise<Telefone[]> {
    const telefones = await this.telefoneRepository.findAll();

    if (!telefones?.length) {
      throw new AppError('Phones does not exist', 404);
    }

    return telefones;
  }
}

export default FindAllTelefoneService;
