import { Request, Response } from 'express';

import CreateAcaoService from '../../../services/CreateAcaoService';
import FindAllAcaoService from '../../../services/FindAllAcaoService';
import FindOneAcaoService from '../../../services/FindOneAcaoService';
import UpdateAcaoService from '../../../services/UpdateAcaoService';
import DeleteAcaoService from '../../../services/DeleteAcaoService';

import AcaoRepository from '../../typeorm/repositories/AcaoRepository';
import TipoAcaoRepository from '../../../../tipo-acao/infra/typeorm/repositories/TipoAcaoRepository';
import FindByActionSearchAcaoService from '../../../services/FindByActionSearchAcaoService';

class AcaoController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      providencias,
      data_atendimento,
      cliente_id,
      parte_contraria_id,
      tipos_de_acoes,
    } = req.body;

    const acaoRepository = new AcaoRepository();
    const tipoAcaoRepository = new TipoAcaoRepository();

    const createAcao = new CreateAcaoService(
      acaoRepository,
      tipoAcaoRepository,
    );

    const acao = await createAcao.execute({
      providencias,
      data_atendimento,
      cliente_id,
      parte_contraria_id,
      tipos_de_acoes,
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

  public async findByActionSearch(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const search = String(req.query.search);

    const acaoRepository = new AcaoRepository();

    const findByActionSearch = new FindByActionSearchAcaoService(
      acaoRepository,
    );

    const acoes = await findByActionSearch.execute(search);

    return res.json(acoes);
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
