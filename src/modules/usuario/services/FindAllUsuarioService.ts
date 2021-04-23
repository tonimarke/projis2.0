import AppError from '../../../shared/error/AppError';
import Usuario from '../infra/typeorm/entities/Usuario';
import IUsuarioRepository from '../repositories/IUsuarioRepository';

class FindAllUsuarioService {
  private usuarioRepository: IUsuarioRepository;

  constructor(usuarioRepository: IUsuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  public async execute(): Promise<Usuario[]> {
    const usuarios = await this.usuarioRepository.findAll();

    if (!usuarios?.length) {
      throw new AppError('Users does not exist', 404);
    }

    return usuarios;
  }
}

export default FindAllUsuarioService;
