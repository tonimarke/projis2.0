import AppError from '../../../shared/error/AppError';
import ICreateUsuarioDTO from '../dtos/ICreateUsuarioDTO';
import Usuario from '../infra/typeorm/entities/Usuario';
import IHashProvider from '../providers/HashProvider/model/IHashProvider';
import IUsuarioRepository from '../repositories/IUsuarioRepository';

class CreateUsuarioService {
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
    nome,
    email,
    senha,
    tipo_de_pessoa_id,
  }: ICreateUsuarioDTO): Promise<Usuario> {
    const checkUsuarioExist = await this.usuarioRepository.findByEmail(email);

    if (checkUsuarioExist) {
      throw new AppError('Email already exist', 400);
    }

    const hashedPassword = await this.hashProvider.generateHash(senha);

    const usuario = await this.usuarioRepository.create({
      nome,
      email,
      senha: hashedPassword,
      tipo_de_pessoa_id,
    });

    return usuario;
  }
}

export default CreateUsuarioService;
