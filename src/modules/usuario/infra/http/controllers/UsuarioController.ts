import { Request, Response } from 'express';
import CreateUsuarioService from '../../../services/CreateUsuarioService';

import UsuarioRepository from '../../typeorm/repositories/UsuarioRepository';
import BCryptHashProvider from '../../../providers/HashProvider/implementation/BCryptHashProvider';
import FindAllUsuarioService from '../../../services/FindAllUsuarioService';
import FindOneUsuarioService from '../../../services/FindOneUsuarioService';
import UpdateUsuarioService from '../../../services/UpdateUsuarioService';
import DeleteUsuarioService from '../../../services/DeleteUsuarioService';

class UsuarioController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, email, senha, tipo_de_pessoa_id } = req.body;

    const usuarioRepository = new UsuarioRepository();

    const hashProvider = new BCryptHashProvider();

    const createUsuario = new CreateUsuarioService(
      usuarioRepository,
      hashProvider,
    );

    const usuario = await createUsuario.execute({
      nome,
      email,
      senha,
      tipo_de_pessoa_id,
    });

    return res.json(usuario);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const usuarioRepository = new UsuarioRepository();

    const findAllUsuario = new FindAllUsuarioService(usuarioRepository);

    const usuario = await findAllUsuario.execute();

    return res.json(usuario);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const usuarioRepository = new UsuarioRepository();

    const findOneUsuario = new FindOneUsuarioService(usuarioRepository);

    const usuario = await findOneUsuario.execute(id);

    return res.json(usuario);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {
      id,
      nome,
      email,
      senha,
      senha_antiga,
      tipo_de_pessoa_id,
    } = req.body;

    const usuarioRepository = new UsuarioRepository();

    const hashProvider = new BCryptHashProvider();

    const updateUsuario = new UpdateUsuarioService(
      usuarioRepository,
      hashProvider,
    );

    const usuario = await updateUsuario.execute({
      id,
      nome,
      email,
      senha,
      senha_antiga,
      tipo_de_pessoa_id,
    });

    return res.json(usuario);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const usuarioRepository = new UsuarioRepository();

    const deleteUsuario = new DeleteUsuarioService(usuarioRepository);

    const usuario = await deleteUsuario.execute(id);

    return res.json(usuario);
  }
}

export default UsuarioController;
