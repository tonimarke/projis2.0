import { Request, Response } from 'express';

import CreateTipoBemMovelService from '../../../services/CreateTipoBemMovelService';
import FindAllTipoBemMovelService from '../../../services/FindAllTipoBemMovelService';
import FindOneTipoBemMovelService from '../../../services/FindOneTipoBemMovelService';
import UpdateTipoBemMovelService from '../../../services/UpdateTipoBemMovelService';
import DeleteTipoBemMovelService from '../../../services/DeleteTipoBemMovelService';

import TipoBemMovelRepository from '../../typeorm/repositories/TipoBemMovelRepository';

class TipoBemImovelController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { nome } = req.body;

    const tipoBemMovelRepository = new TipoBemMovelRepository();

    const createTipoBemMovel = new CreateTipoBemMovelService(
      tipoBemMovelRepository,
    );

    const bemMovel = await createTipoBemMovel.execute({
      nome,
    });

    return res.json(bemMovel);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const tipoBemMovelRepository = new TipoBemMovelRepository();

    const findAllTipoBemMovel = new FindAllTipoBemMovelService(
      tipoBemMovelRepository,
    );

    const tiposBensMoveis = await findAllTipoBemMovel.execute();

    return res.json(tiposBensMoveis);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const tipoBemMovelRepository = new TipoBemMovelRepository();

    const findOneTipoBemMovel = new FindOneTipoBemMovelService(
      tipoBemMovelRepository,
    );

    const bemMovel = await findOneTipoBemMovel.execute(id);

    return res.json(bemMovel);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, nome } = req.body;

    const tipoBemMovelRepository = new TipoBemMovelRepository();

    const updateTipoBemMovel = new UpdateTipoBemMovelService(
      tipoBemMovelRepository,
    );

    const bemMovel = await updateTipoBemMovel.execute({
      id,
      nome,
    });

    return res.json(bemMovel);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const tipoBemMovelRepository = new TipoBemMovelRepository();

    const deleteTipoBemMovel = new DeleteTipoBemMovelService(
      tipoBemMovelRepository,
    );

    const bemMovel = await deleteTipoBemMovel.execute(id);

    return res.json(bemMovel);
  }
}

export default TipoBemImovelController;
