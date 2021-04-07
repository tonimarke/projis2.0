import AppError from '../../../shared/error/AppError';
import Telefone from '../infra/typeorm/entities/Telefone';
import ITelefoneRepository from '../repositories/ITelefoneRepository';

interface IRequest {
  id: string;
  tipo: string;
  numero: string;
  descricao: string;
}

class UpdateTelefoneService {
  private telefoneRepository: ITelefoneRepository;

  constructor(telefoneRepository: ITelefoneRepository) {
    this.telefoneRepository = telefoneRepository;
  }

  public async execute({
    id,
    tipo,
    numero,
    descricao,
  }: IRequest): Promise<Telefone> {
    const telefone = await this.telefoneRepository.findById(id);

    if (!telefone) {
      throw new AppError('Phone does not exist', 404);
    }

    const checkPhoneExist = await this.telefoneRepository.findByNumber(numero);

    if (checkPhoneExist) {
      throw new AppError('Phone already exist', 400);
    }

    telefone.tipo = tipo;
    telefone.numero = numero;
    telefone.descricao = descricao;

    await this.telefoneRepository.save(telefone);

    return telefone;
  }
}

export default UpdateTelefoneService;
