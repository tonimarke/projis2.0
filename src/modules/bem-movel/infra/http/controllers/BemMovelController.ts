import { Request, Response } from 'express';

import CreateBemMovelService from '../../../services/CreateBemMovelService';
import FindAllBemMovelService from '../../../services/FindAllBemMovelService';
import FindOneBemMovelService from '../../../services/FindOneBemMovelService';
import UpdateBemMovelService from '../../../services/UpdateBemMovelService';
import DeleteBemMovelService from '../../../services/DeleteBemMovelService';

import BemMovelRepository from '../../typeorm/repositories/BemMovelRepository';

class BemMovelController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, valor, quantidade, tipo_bem_movel_id } = req.body;

    const bemMovelRepository = new BemMovelRepository();

    const createBemMovel = new CreateBemMovelService(bemMovelRepository);

    const bemMovel = await createBemMovel.execute({
      nome,
      valor,
      quantidade,
      tipo_bem_movel_id,
    });

    return res.json(bemMovel);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const bemMovelRepository = new BemMovelRepository();

    const findAllBemMovel = new FindAllBemMovelService(bemMovelRepository);

    const bensMoveis = await findAllBemMovel.execute();

    return res.json(bensMoveis);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const bemMovelRepository = new BemMovelRepository();

    const findOneBemMovel = new FindOneBemMovelService(bemMovelRepository);

    const bemMovel = await findOneBemMovel.execute(id);

    return res.json(bemMovel);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, nome, valor, quantidade } = req.body;

    const bemMovelRepository = new BemMovelRepository();

    const updateBemMovel = new UpdateBemMovelService(bemMovelRepository);

    const bemMovel = await updateBemMovel.execute({
      id,
      nome,
      valor,
      quantidade,
    });

    return res.json(bemMovel);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const bemMovelRepository = new BemMovelRepository();

    const deleteBemMovel = new DeleteBemMovelService(bemMovelRepository);

    const bemMovel = await deleteBemMovel.execute(id);

    return res.json(bemMovel);
  }
}

export default BemMovelController;
