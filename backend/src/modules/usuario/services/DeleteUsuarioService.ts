import AppError from '../../../shared/error/AppError';
import IUsuarioRepository from '../repositories/IUsuarioRepository';

class DeleteUsuarioService {
  private usuarioRepository: IUsuarioRepository;

  constructor(usuarioRepository: IUsuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkUsuarioExist = await this.usuarioRepository.findById(id);

    if (!checkUsuarioExist) {
      throw new AppError('Users does not exist', 404);
    }

    const usuario = await this.usuarioRepository.delete(id);

    return usuario;
  }
}

export default DeleteUsuarioService;
