import AppError from '../../../shared/error/AppError';
import Usuario from '../infra/typeorm/entities/Usuario';
import IUsuarioRepository from '../repositories/IUsuarioRepository';

class FindOneUsuarioService {
  private usuarioRepository: IUsuarioRepository;

  constructor(usuarioRepository: IUsuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  public async execute(id: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findById(id);

    if (!usuario) {
      throw new AppError('Users does not exist', 404);
    }

    return usuario;
  }
}

export default FindOneUsuarioService;
