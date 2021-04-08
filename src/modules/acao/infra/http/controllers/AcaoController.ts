import { Request, Response } from 'express';

import CreateAcaoService from '../../../services/CreateAcaoService';
import FindAllAcaoService from '../../../services/FindAllAcaoService';
import FindOneAcaoService from '../../../services/FindOneAcaoService';
import UpdateAcaoService from '../../../services/UpdateAcaoService';
import DeleteAcaoService from '../../../services/DeleteAcaoService';

import AcaoRepository from '../../typeorm/repositories/AcaoRepository';

class AcaoController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      providencias,
      data_atendimento,
      cliente_id,
      parte_contraria_id,
    } = req.body;

    const acaoRepository = new AcaoRepository();

    const createAcao = new CreateAcaoService(acaoRepository);

    const acao = await createAcao.execute({
      providencias,
      data_atendimento,
      cliente_id,
      parte_contraria_id,
    });

    return res.json(acao);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const acaoRepository = new AcaoRepository();

    const findAllAcao = new FindAllAcaoService(acaoRepository);

    const acoes = await findAllAcao.execute();

    return res.json(acoes);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const acaoRepository = new AcaoRepository();

    const findOneAcao = new FindOneAcaoService(acaoRepository);

    const acao = await findOneAcao.execute(id);

    return res.json(acao);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, providencias, data_atendimento } = req.body;

    const acaoRepository = new AcaoRepository();

    const updateAcao = new UpdateAcaoService(acaoRepository);

    const acao = await updateAcao.execute({
      id,
      providencias,
      data_atendimento,
    });

    return res.json(acao);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const acaoRepository = new AcaoRepository();

    const deleteAcao = new DeleteAcaoService(acaoRepository);

    const acao = await deleteAcao.execute(id);

    return res.json(acao);
  }
}

export default AcaoController;
