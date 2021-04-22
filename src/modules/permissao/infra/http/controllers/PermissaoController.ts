import { Request, Response } from 'express';

import CreatePermissaoService from '../../../services/CreatePermissaoService';
import FindAllPermissaoService from '../../../services/FindAllPermissaoService';
import FindOnePermissaoService from '../../../services/FindOnePermissaoService';
import UpdatePermissaoService from '../../../services/UpdatePermissaoService';
import DeletePermissaoService from '../../../services/DeletePermissaoService';

import PermissaoRepository from '../../typeorm/repositories/PermissaoRepository';

class PermissaoController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, descricao } = req.body;

    const permissaoRepository = new PermissaoRepository();

    const createPermissao = new CreatePermissaoService(permissaoRepository);

    const permissao = await createPermissao.execute({
      nome,
      descricao,
    });

    return res.json(permissao);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const permissaoRepository = new PermissaoRepository();

    const findAllPermissao = new FindAllPermissaoService(permissaoRepository);

    const permissao = await findAllPermissao.execute();

    return res.json(permissao);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const permissaoRepository = new PermissaoRepository();

    const findOnePermissao = new FindOnePermissaoService(permissaoRepository);

    const permissao = await findOnePermissao.execute(id);

    return res.json(permissao);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, nome, descricao } = req.body;

    const permissaoRepository = new PermissaoRepository();

    const updatePermissao = new UpdatePermissaoService(permissaoRepository);

    const permissao = await updatePermissao.execute({
      id,
      nome,
      descricao,
    });

    return res.json(permissao);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const permissaoRepository = new PermissaoRepository();

    const deletePermissao = new DeletePermissaoService(permissaoRepository);

    const permissao = await deletePermissao.execute(id);

    return res.json(permissao);
  }
}

export default PermissaoController;
