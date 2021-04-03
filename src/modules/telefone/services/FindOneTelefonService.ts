import AppError from '../../../shared/error/AppError';
import Telefone from '../infra/typeorm/entities/Telefone';
import ITelefoneRepository from '../repositories/ITelefoneRepository';

class FindOneTelefoneService {
  private telefoneRepository: ITelefoneRepository;

  constructor(telefoneRepository: ITelefoneRepository) {
    this.telefoneRepository = telefoneRepository;
  }

  public async execute(id: string): Promise<Telefone> {
    const telefone = await this.telefoneRepository.findById(id);

    if (!telefone) {
      throw new AppError('Phone does not exist', 404);
    }

    return telefone;
  }
}

export default FindOneTelefoneService;
