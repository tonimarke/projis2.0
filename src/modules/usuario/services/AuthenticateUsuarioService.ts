import { sign } from 'jsonwebtoken';
import { secret, expiresIn } from '../../../config/auth';
import AppError from '../../../shared/error/AppError';
import IAuthenticateUsuarioDTO from '../dtos/IAuthenticateUsuarioDTO';
import Usuario from '../infra/typeorm/entities/Usuario';
import IHashProvider from '../providers/HashProvider/model/IHashProvider';
import IUsuarioRepository from '../repositories/IUsuarioRepository';

interface IResponse {
  usuario: Usuario;
  token: string;
}

class AuthenticateUsuarioService {
  private usuarioRepository: IUsuarioRepository;

  private hashProvider: IHashProvider;

  constructor(
    usuarioRepository: IUsuarioRepository,
    hashProvider: IHashProvider,
  ) {
    this.usuarioRepository = usuarioRepository;
    this.hashProvider = hashProvider;
  }

  public async exacute({
    email,
    senha,
  }: IAuthenticateUsuarioDTO): Promise<IResponse> {
    const usuario = await this.usuarioRepository.findByEmail(email);

    if (!usuario) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const passwordMatched = await this.hashProvider.compareHash(
      senha,
      usuario.senha,
    );

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const token = sign({}, secret, {
      subject: usuario.id,
      expiresIn,
    });

    return { usuario, token };
  }
}

export default AuthenticateUsuarioService;
