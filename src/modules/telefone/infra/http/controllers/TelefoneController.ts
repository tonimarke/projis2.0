import { Request, Response } from 'express';

import CreateTelefoneService from '../../../services/CreateTelefoneService';
import FindAllTelefoneService from '../../../services/FindAllTelefoneService';
import FindOneTelefoneService from '../../../services/FindOneTelefonService';
import UpdateTelefoneService from '../../../services/UpdateTelefoneService';
import DeleteTelefoneService from '../../../services/DeleteTelefoneService';

import TelefoneRepository from '../../typeorm/repositories/TelefoneRepository';

class TelefoneController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { tipo, numero, descricao, pessoa_id } = req.body;

    const telefoneRepository = new TelefoneRepository();

    const createTelefone = new CreateTelefoneService(telefoneRepository);

    const telefone = await createTelefone.execute({
      tipo,
      numero,
      descricao,
      pessoa_id,
    });

    return res.json(telefone);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const telefoneRepository = new TelefoneRepository();

    const findAllTelefone = new FindAllTelefoneService(telefoneRepository);

    const telefone = await findAllTelefone.execute();

    return res.json(telefone);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const telefoneRepository = new TelefoneRepository();

    const findOneTelefone = new FindOneTelefoneService(telefoneRepository);

    const telefone = await findOneTelefone.execute(id);

    return res.json(telefone);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, tipo, numero, descricao } = req.body;

    const telefoneRepository = new TelefoneRepository();

    const updateTelefone = new UpdateTelefoneService(telefoneRepository);

    const telefone = await updateTelefone.execute({
      id,
      tipo,
      numero,
      descricao,
    });

    return res.json(telefone);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const telefoneRepository = new TelefoneRepository();

    const deleteTelefone = new DeleteTelefoneService(telefoneRepository);

    const telefone = await deleteTelefone.execute(id);

    return res.json(telefone);
  }
}

export default TelefoneController;
