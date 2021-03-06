import { Request, Response } from 'express';

import CreateEstadoCivilService from '../../../services/CreateEstadoCivilService';
import DeleteEstadoCivilService from '../../../services/DeleteEstadoCivilService';
import FindAllEstadoCivilService from '../../../services/FindAllEstadoCivilService';
import FindOneEstadoCivilService from '../../../services/FindOneEstadoCivilService';
import UpdateEstadoCivilService from '../../../services/UpdateEstadoCivilService';

import EstadoCivilRepository from '../../typeorm/repositories/EstadoCivilRepository';

class EstadoCivilController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { estado_civil } = req.body;

    const estadoCivilrepository = new EstadoCivilRepository();

    const createEstadoCivil = new CreateEstadoCivilService(
      estadoCivilrepository,
    );

    const estado = await createEstadoCivil.execute(estado_civil);

    return res.json(estado);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const estadoCivilrepository = new EstadoCivilRepository();

    const findAllEstadoCivil = new FindAllEstadoCivilService(
      estadoCivilrepository,
    );

    const estados = await findAllEstadoCivil.execute();

    return res.json(estados);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const estadoCivilrepository = new EstadoCivilRepository();

    const findOneEstadoCivil = new FindOneEstadoCivilService(
      estadoCivilrepository,
    );

    const estado = await findOneEstadoCivil.execute(id);

    return res.json(estado);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, estado_civil } = req.body;

    const estadoCivilrepository = new EstadoCivilRepository();

    const updateEstadoCivil = new UpdateEstadoCivilService(
      estadoCivilrepository,
    );

    const estado = await updateEstadoCivil.execute({
      id,
      estado_civil,
    });

    return res.json(estado);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const estadoCivilrepository = new EstadoCivilRepository();

    const deleteEstadoCivil = new DeleteEstadoCivilService(
      estadoCivilrepository,
    );

    const estado = await deleteEstadoCivil.execute(id);

    return res.json(estado);
  }
}

export default EstadoCivilController;
