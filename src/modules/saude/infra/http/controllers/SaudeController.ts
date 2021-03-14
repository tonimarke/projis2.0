import { Request, Response } from 'express';

import CreateSaudeService from '../../../services/CreateSaudeService';
import FindAllSaudeService from '../../../services/FindAllSaudeService';
import FindOneSaudeService from '../../../services/FindOneSaudeService';
import UpdateSaudeService from '../../../services/UpdateSaudeService';
import DeleteSaudeService from '../../../services/DeleteSaudeService';

import SaudeRepository from '../../typeorm/repositories/SaudeRepository';

class SaudeController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      interditado,
      curador_tutor,
      medicamentos,
      rede_publica,
      observacoes,
    } = req.body;

    const saudeRepository = new SaudeRepository();

    const createSaude = new CreateSaudeService(saudeRepository);

    const saude = await createSaude.execute({
      interditado,
      curador_tutor,
      medicamentos,
      rede_publica,
      observacoes,
    });

    return res.json(saude);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const saudeRepository = new SaudeRepository();

    const findAllSaude = new FindAllSaudeService(saudeRepository);

    const saudes = await findAllSaude.execute();

    return res.json(saudes);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const saudeRepository = new SaudeRepository();

    const findOneSaude = new FindOneSaudeService(saudeRepository);

    const saude = await findOneSaude.execute(id);

    return res.json(saude);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {
      id,
      interditado,
      curador_tutor,
      medicamentos,
      rede_publica,
      observacoes,
    } = req.body;

    const saudeRepository = new SaudeRepository();

    const updateSaude = new UpdateSaudeService(saudeRepository);

    const saude = await updateSaude.execute({
      id,
      interditado,
      curador_tutor,
      medicamentos,
      rede_publica,
      observacoes,
    });

    return res.json(saude);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const saudeRepository = new SaudeRepository();

    const deleteSaude = new DeleteSaudeService(saudeRepository);

    const saude = await deleteSaude.execute(id);

    return res.json(saude);
  }
}

export default SaudeController;
