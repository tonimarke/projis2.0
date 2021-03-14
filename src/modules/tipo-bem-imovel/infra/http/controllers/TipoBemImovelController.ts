import { Request, Response } from 'express';

import CreateTipoBemImovelService from '../../../services/CreateTipoBemImovelService';
import FindAllTipoBemImovelService from '../../../services/FindAllTipoBemImovelService';
import FindOneTipoBemImovelService from '../../../services/FindOneTipoBemImovelService';
import UpdateTipoBemImovelService from '../../../services/UpdateTipoBemImovelService';
import DeleteTipoBemImovelService from '../../../services/DeleteTipoBemImovelService';

import TipoBemImovelRepository from '../../typeorm/repositories/TipoBemImovelRepository';

class TipoBemImovelController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { nome } = req.body;

    const tipoBemImovelRepository = new TipoBemImovelRepository();

    const createTipoBemImovel = new CreateTipoBemImovelService(
      tipoBemImovelRepository,
    );

    const bemImovel = await createTipoBemImovel.execute({
      nome,
    });

    return res.json(bemImovel);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const tipoBemImovelRepository = new TipoBemImovelRepository();

    const findAllTipoBemImovel = new FindAllTipoBemImovelService(
      tipoBemImovelRepository,
    );

    const tiposBensImoveis = await findAllTipoBemImovel.execute();

    return res.json(tiposBensImoveis);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const tipoBemImovelRepository = new TipoBemImovelRepository();

    const findOneTipoBemImovel = new FindOneTipoBemImovelService(
      tipoBemImovelRepository,
    );

    const bemImovel = await findOneTipoBemImovel.execute(id);

    return res.json(bemImovel);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, nome } = req.body;

    const tipoBemImovelRepository = new TipoBemImovelRepository();

    const updateTipoBemImovel = new UpdateTipoBemImovelService(
      tipoBemImovelRepository,
    );

    const bemImovel = await updateTipoBemImovel.execute({
      id,
      nome,
    });

    return res.json(bemImovel);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const tipoBemImovelRepository = new TipoBemImovelRepository();

    const deleteTipoBemImovel = new DeleteTipoBemImovelService(
      tipoBemImovelRepository,
    );

    const bemImovel = await deleteTipoBemImovel.execute(id);

    return res.json(bemImovel);
  }
}

export default TipoBemImovelController;
