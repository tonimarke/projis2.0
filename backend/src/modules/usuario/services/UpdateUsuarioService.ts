import AppError from '../../../shared/error/AppError';
import IUpdateUsuarioDTO from '../dtos/IUpdateUsuarioDTO';
import Usuario from '../infra/typeorm/entities/Usuario';
import IHashProvider from '../providers/HashProvider/model/IHashProvider';
import IUsuarioRepository from '../repositories/IUsuarioRepository';

class UpdateUsuarioService {
  private usuarioRepository: IUsuarioRepository;

  private hashProvider: IHashProvider;

  constructor(
    usuarioRepository: IUsuarioRepository,
    hashProvider: IHashProvider,
  ) {
    this.usuarioRepository = usuarioRepository;
    this.hashProvider = hashProvider;
  }

  public async execute({
    id,
    nome,
    email,
    senha,
    senha_antiga,
    tipo_de_pessoa_id,
  }: IUpdateUsuarioDTO): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findById(id);

    if (!usuario) {
      throw new AppError('Users does not exist', 404);
    }

    const usuarioWithUpdatedEmail = await this.usuarioRepository.findByEmail(
      email,
    );

    if (usuarioWithUpdatedEmail && usuarioWithUpdatedEmail.id !== id) {
      throw new AppError('Email already in use');
    }

    usuario.nome = nome;
    usuario.email = email;
    usuario.tipo_de_pessoa_id = tipo_de_pessoa_id;

    if (senha && !senha_antiga) {
      throw new AppError(
        'You need to inform the old password to set a new passwords',
      );
    }

    if (senha && senha_antiga) {
      const checkOldPassword = await this.hashProvider.compareHash(
        senha_antiga,
        senha,
      );

      if (!checkOldPassword) {
        throw new AppError('Old password does not match');
      }

      usuario.senha = await this.hashProvider.generateHash(senha);
    }

    await this.usuarioRepository.save(usuario);

    return usuario;
  }
}

export default UpdateUsuarioService;
