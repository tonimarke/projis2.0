import AppError from '../../../shared/error/AppError';
import ITelefoneRepository from '../repositories/ITelefoneRepository';

class DeleteTelefoneService {
  private telefoneRepository: ITelefoneRepository;

  constructor(telefoneRepository: ITelefoneRepository) {
    this.telefoneRepository = telefoneRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkPhoneExist = await this.telefoneRepository.findById(id);

    if (!checkPhoneExist) {
      throw new AppError('Phone does not exist', 404);
    }

    const telefone = await this.telefoneRepository.delete(id);

    return telefone;
  }
}

export default DeleteTelefoneService;
