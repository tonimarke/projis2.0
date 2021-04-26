import { Request, Response } from 'express';

import CreateMembroFamiliaService from '../../../services/CreateMembroFamiliaService';
import FindAllMembroFamiliaService from '../../../services/FindAllMembroFamiliaService';
import FindOneMembroFamiliaService from '../../../services/FindOneMembroFamiliaService';
import UpdateMembroFamiliaService from '../../../services/UpdateMembroFamiliaService';
import DeleteMembroFamiliaService from '../../../services/DeleteMembroFamiliaService';

import MembroFamiliaRepository from '../../typeorm/repositories/MembroFamiliaRepository';

class MembroFamiliaController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      nome,
      data_nascimento,
      parentesco,
      num_filhos,
      escolaridade,
      ocupacao,
      local_trabalho,
      salario,
      observacao,
      estado_civil_id,
    } = req.body;

    const membroFamiliaRepository = new MembroFamiliaRepository();

    const createMembroFamilia = new CreateMembroFamiliaService(
      membroFamiliaRepository,
    );

    const membroFamilia = await createMembroFamilia.execute({
      nome,
      data_nascimento,
      parentesco,
      num_filhos,
      escolaridade,
      ocupacao,
      local_trabalho,
      salario,
      observacao,
      estado_civil_id,
    });

    return res.json(membroFamilia);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const membroFamiliaRepository = new MembroFamiliaRepository();

    const findAllMembroFamilia = new FindAllMembroFamiliaService(
      membroFamiliaRepository,
    );

    const membroFamilia = await findAllMembroFamilia.execute();

    return res.json(membroFamilia);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const membroFamiliaRepository = new MembroFamiliaRepository();

    const findOneMembroFamilia = new FindOneMembroFamiliaService(
      membroFamiliaRepository,
    );

    const membroFamilia = await findOneMembroFamilia.execute(id);

    return res.json(membroFamilia);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {
      id,
      nome,
      data_nascimento,
      parentesco,
      num_filhos,
      escolaridade,
      ocupacao,
      local_trabalho,
      salario,
      observacao,
    } = req.body;

    const membroFamiliaRepository = new MembroFamiliaRepository();

    const updateMembroFamilia = new UpdateMembroFamiliaService(
      membroFamiliaRepository,
    );

    const membroFamilia = await updateMembroFamilia.execute({
      id,
      nome,
      data_nascimento,
      parentesco,
      num_filhos,
      escolaridade,
      ocupacao,
      local_trabalho,
      salario,
      observacao,
    });

    return res.json(membroFamilia);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const membroFamiliaRepository = new MembroFamiliaRepository();

    const updateMembroFamilia = new DeleteMembroFamiliaService(
      membroFamiliaRepository,
    );

    const membroFamilia = await updateMembroFamilia.execute(id);

    return res.json(membroFamilia);
  }
}

export default MembroFamiliaController;
