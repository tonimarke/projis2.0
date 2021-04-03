import AppError from '../../../shared/error/AppError';
import ICreateTelefoneDTO from '../dtos/ICreateTelefoneDTO';
import Telefone from '../infra/typeorm/entities/Telefone';
import ITelefoneRepository from '../repositories/ITelefoneRepository';

class CreateTelefoneService {
  private telefoneRepository: ITelefoneRepository;

  constructor(telefoneRepository: ITelefoneRepository) {
    this.telefoneRepository = telefoneRepository;
  }

  public async execute({
    tipo,
    numero,
    descricao,
    pessoa_id,
  }: ICreateTelefoneDTO): Promise<Telefone> {
    const checkPhoneExist = await this.telefoneRepository.findByNumber(numero);

    if (checkPhoneExist) {
      throw new AppError('Phone already exist', 400);
    }

    const telefone = await this.telefoneRepository.create({
      tipo,
      numero,
      descricao,
      pessoa_id,
    });

    return telefone;
  }
}

export default CreateTelefoneService;
