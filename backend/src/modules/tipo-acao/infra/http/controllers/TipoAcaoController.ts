import { Request, Response } from 'express';

import CreateTipoAcaoService from '../../../services/CreateTipoAcaoService';
import FindAllTipoAcaoService from '../../../services/FindAllTipoAcaoService';
import FindOneTipoAcaoService from '../../../services/FindOneTipoAcaoService';
import UpdateTipoAcaoService from '../../../services/UpdateTipoAcaoService';
import DeleteTipoAcaoService from '../../../services/DeleteTipoAcaoService';

import TipoAcaoRepository from '../../typeorm/repositories/TipoAcaoRepository';

class TipoAcaoController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, descricao } = req.body;

    const tipoAcaoRepository = new TipoAcaoRepository();

    const createTipoAcao = new CreateTipoAcaoService(tipoAcaoRepository);

    const tipoAcao = await createTipoAcao.execute({
      nome,
      descricao,
    });

    return res.json(tipoAcao);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const tipoAcaoRepository = new TipoAcaoRepository();

    const findAllTipoAcao = new FindAllTipoAcaoService(tipoAcaoRepository);

    const tiposAcaoes = await findAllTipoAcao.execute();

    return res.json(tiposAcaoes);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const tipoAcaoRepository = new TipoAcaoRepository();

    const findOneTipoAcao = new FindOneTipoAcaoService(tipoAcaoRepository);

    const tipoAcao = await findOneTipoAcao.execute(id);

    return res.json(tipoAcao);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, nome, descricao } = req.body;

    const tipoAcaoRepository = new TipoAcaoRepository();

    const updateTipoAcao = new UpdateTipoAcaoService(tipoAcaoRepository);

    const tipoAcao = await updateTipoAcao.execute({
      id,
      nome,
      descricao,
    });

    return res.json(tipoAcao);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const tipoAcaoRepository = new TipoAcaoRepository();

    const deleteTipoAcao = new DeleteTipoAcaoService(tipoAcaoRepository);

    const tipoAcao = await deleteTipoAcao.execute(id);

    return res.json(tipoAcao);
  }
}

export default TipoAcaoController;
