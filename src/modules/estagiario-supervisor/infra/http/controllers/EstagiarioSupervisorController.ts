import { Request, Response } from 'express';

import CreateEstagiarioSupervisorService from '../../../services/CreateEstagiarioSupervisorService';
import FindAllEstagiarioSupervisorService from '../../../services/FindAllEstagiarioSupervisorService';
import FindOneEstagiarioSupervisorService from '../../../services/FindOneEstagiarioSupervisorService';
import UpdateEstagiarioSupervisorService from '../../../services/UpdateEstagiarioSupervisorService';
import DeleteEstagiarioSupervisorService from '../../../services/DeleteEstagiarioSupervisorService';

import EstagiarioSupervisorRepository from '../../typeorm/repositories/EstagiarioSupervisor';

class EstagiarioSupervisorController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { estagiario_id, supervisor_id } = req.body;

    const estagiarioSupervisorRepository = new EstagiarioSupervisorRepository();

    const createEstagiarioSupervisor = new CreateEstagiarioSupervisorService(
      estagiarioSupervisorRepository,
    );

    const estagiarioSupervisor = await createEstagiarioSupervisor.execute({
      estagiario_id,
      supervisor_id,
    });

    return res.json(estagiarioSupervisor);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const estagiarioSupervisorRepository = new EstagiarioSupervisorRepository();

    const findAllEstagiarioSupervisor = new FindAllEstagiarioSupervisorService(
      estagiarioSupervisorRepository,
    );

    const estagiarioSupervisor = await findAllEstagiarioSupervisor.execute();

    return res.json(estagiarioSupervisor);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const estagiarioSupervisorRepository = new EstagiarioSupervisorRepository();

    const findOneEstagiarioSupervisor = new FindOneEstagiarioSupervisorService(
      estagiarioSupervisorRepository,
    );

    const estagiarioSupervisor = await findOneEstagiarioSupervisor.execute(id);

    return res.json(estagiarioSupervisor);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, estagiario_id, supervisor_id } = req.body;

    const estagiarioSupervisorRepository = new EstagiarioSupervisorRepository();

    const updatedEstagiarioSupervisor = new UpdateEstagiarioSupervisorService(
      estagiarioSupervisorRepository,
    );

    const estagiarioSupervisor = await updatedEstagiarioSupervisor.execute({
      id,
      estagiario_id,
      supervisor_id,
    });

    return res.json(estagiarioSupervisor);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const estagiarioSupervisorRepository = new EstagiarioSupervisorRepository();

    const deleteEstagiarioSupervisor = new DeleteEstagiarioSupervisorService(
      estagiarioSupervisorRepository,
    );

    const estagiarioSupervisor = await deleteEstagiarioSupervisor.execute(id);

    return res.json(estagiarioSupervisor);
  }
}

export default EstagiarioSupervisorController;
