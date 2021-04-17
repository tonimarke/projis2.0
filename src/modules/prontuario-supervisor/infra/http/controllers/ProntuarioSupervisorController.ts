import { Request, Response } from 'express';

import CreateProntuarioSupervisorService from '../../../services/CreateProntuarioSupervisorService';
import FindAllProntuarioSupervisorService from '../../../services/FindAllProntuarioSupervisorService';
import FindOneProntuarioSupervisorService from '../../../services/FindOneProntuarioSupervisorService';
import UpdateProntuarioSupervisorService from '../../../services/UpdateProntuarioSupervisorService';
import DeleteProntuarioSupervisorService from '../../../services/DeleteProntuarioSupervisorService';

import ProntuarioSupervisorRepository from '../../typeorm/repositories/ProntuarioSupervisorRepository';

class ProntuarioSupervisorController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { supervisor_id, prontuario_id } = req.body;

    const prontuarioSupervisorRepository = new ProntuarioSupervisorRepository();

    const createProntuarioSupervisor = new CreateProntuarioSupervisorService(
      prontuarioSupervisorRepository,
    );

    const prontuarioSupervisor = await createProntuarioSupervisor.execute({
      supervisor_id,
      prontuario_id,
    });

    return res.json(prontuarioSupervisor);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const prontuarioSupervisorRepository = new ProntuarioSupervisorRepository();

    const findAllProntuarioSupervisor = new FindAllProntuarioSupervisorService(
      prontuarioSupervisorRepository,
    );

    const prontuarioSupervisor = await findAllProntuarioSupervisor.execute();

    return res.json(prontuarioSupervisor);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const prontuarioSupervisorRepository = new ProntuarioSupervisorRepository();

    const findOneProntuarioSupervisor = new FindOneProntuarioSupervisorService(
      prontuarioSupervisorRepository,
    );

    const prontuarioSupervisor = await findOneProntuarioSupervisor.execute(id);

    return res.json(prontuarioSupervisor);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, supervisor_id, prontuario_id } = req.body;

    const prontuarioSupervisorRepository = new ProntuarioSupervisorRepository();

    const updateProntuarioSupervisor = new UpdateProntuarioSupervisorService(
      prontuarioSupervisorRepository,
    );

    const prontuarioSupervisor = await updateProntuarioSupervisor.execute({
      id,
      supervisor_id,
      prontuario_id,
    });

    return res.json(prontuarioSupervisor);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const prontuarioSupervisorRepository = new ProntuarioSupervisorRepository();

    const deleteProntuarioSupervisor = new DeleteProntuarioSupervisorService(
      prontuarioSupervisorRepository,
    );

    const prontuarioSupervisor = await deleteProntuarioSupervisor.execute(id);

    return res.json(prontuarioSupervisor);
  }
}

export default ProntuarioSupervisorController;
