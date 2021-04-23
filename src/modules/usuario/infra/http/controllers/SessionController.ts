import { Request, Response } from 'express';
import BCryptHashProvider from '../../../providers/HashProvider/implementation/BCryptHashProvider';
import AuthenticateUsuarioService from '../../../services/AuthenticateUsuarioService';
import UsuarioRepository from '../../typeorm/repositories/UsuarioRepository';

class SessionController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, senha } = req.body;

    const usuarioRepository = new UsuarioRepository();

    const hashProvider = new BCryptHashProvider();

    const authenticateUsuario = new AuthenticateUsuarioService(
      usuarioRepository,
      hashProvider,
    );

    const { usuario, token } = await authenticateUsuario.exacute({
      email,
      senha,
    });

    return res.json({ usuario, token });
  }
}

export default SessionController;
