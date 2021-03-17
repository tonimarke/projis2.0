import { Request, Response } from 'express';

import CreateBemImovelService from '../../../services/CreateBemImovelService';
import FindAllBemImovelService from '../../../services/FindAllBemImovelService';
import FindOneImovelService from '../../../services/FindOneBemImovelService';
import UpdateBemImovelService from '../../../services/UpdateBemImovelService';
import DeleteBemImovelService from '../../../services/DeleteBemImovelService';

import BemImovelRepository from '../../typeorm/repositories/BemImovelRepository';

class BemImovelController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, valor, quantidade, tipo_bem_imovel_id } = req.body;

    const bemImovelRepository = new BemImovelRepository();

    const createBemImovel = new CreateBemImovelService(bemImovelRepository);

    const bemImovel = await createBemImovel.execute({
      nome,
      valor,
      quantidade,
      tipo_bem_imovel_id,
    });

    return res.json(bemImovel);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const bemImovelRepository = new BemImovelRepository();

    const findAllBemImovel = new FindAllBemImovelService(bemImovelRepository);

    const bensImoveis = await findAllBemImovel.execute();

    return res.json(bensImoveis);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const bemImovelRepository = new BemImovelRepository();

    const findOneBemImovel = new FindOneImovelService(bemImovelRepository);

    const bemImovel = await findOneBemImovel.execute(id);

    return res.json(bemImovel);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, nome, valor, quantidade } = req.body;

    const bemImovelRepository = new BemImovelRepository();

    const updateBemImovel = new UpdateBemImovelService(bemImovelRepository);

    const bemImovel = await updateBemImovel.execute({
      id,
      nome,
      valor,
      quantidade,
    });

    return res.json(bemImovel);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const bemImovelRepository = new BemImovelRepository();

    const deleteBemImovel = new DeleteBemImovelService(bemImovelRepository);

    const bemImovel = await deleteBemImovel.execute(id);

    return res.json(bemImovel);
  }
}

export default BemImovelController;
