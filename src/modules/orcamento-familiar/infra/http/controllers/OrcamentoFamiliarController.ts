import { Request, Response } from 'express';

import CreateOrcamentoFamiliarService from '../../../services/CreateOrcamentoFamiliarService';
import DeleteOrcamentoFamiliarService from '../../../services/DeleteOrcamentoFamiliarService';
import FindAllOrcamentoFamiliarService from '../../../services/FindAllOrcamentoFamiliarService';
import FindOneOrcamentoFamiliarService from '../../../services/FindOneOrcamentoFamiliarService';
import UpdateOrcamentoFamiliarService from '../../../services/UpdateOrcamentoFamiliarService';

import OrcamentoFamiliarRepository from '../../typeorm/repositories/OrcamentoFamiliarRepository';

class OrcamentoFamiliarController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      alimentacao,
      transporte,
      agua,
      luz,
      telefone,
      internet,
      aluguel,
      convenio_medico,
      medicamentos,
      educacao,
      higiene,
      financiamento,
      outros,
    } = req.body;

    const orcamentoFamiliarRepository = new OrcamentoFamiliarRepository();

    const createOrcamentoFamiliar = new CreateOrcamentoFamiliarService(
      orcamentoFamiliarRepository,
    );

    const orcamentoFamiliar = await createOrcamentoFamiliar.execute({
      alimentacao,
      transporte,
      agua,
      luz,
      telefone,
      internet,
      aluguel,
      convenio_medico,
      medicamentos,
      educacao,
      higiene,
      financiamento,
      outros,
    });

    return res.json(orcamentoFamiliar);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const orcamentoFamiliarRepository = new OrcamentoFamiliarRepository();

    const findAllOrcamentoFamiliar = new FindAllOrcamentoFamiliarService(
      orcamentoFamiliarRepository,
    );

    const orcamentosFamiliares = await findAllOrcamentoFamiliar.execute();

    return res.json(orcamentosFamiliares);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const orcamentoFamiliarRepository = new OrcamentoFamiliarRepository();

    const findOneOrcamentoFamiliar = new FindOneOrcamentoFamiliarService(
      orcamentoFamiliarRepository,
    );

    const orcamentoFamiliar = await findOneOrcamentoFamiliar.execute(id);

    return res.json(orcamentoFamiliar);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {
      id,
      alimentacao,
      transporte,
      agua,
      luz,
      telefone,
      internet,
      aluguel,
      convenio_medico,
      medicamentos,
      educacao,
      higiene,
      financiamento,
      outros,
    } = req.body;

    const orcamentoFamiliarRepository = new OrcamentoFamiliarRepository();

    const updateOrcamentoFamiliar = new UpdateOrcamentoFamiliarService(
      orcamentoFamiliarRepository,
    );

    const orcamentoFamiliar = await updateOrcamentoFamiliar.execute({
      id,
      alimentacao,
      transporte,
      agua,
      luz,
      telefone,
      internet,
      aluguel,
      convenio_medico,
      medicamentos,
      educacao,
      higiene,
      financiamento,
      outros,
    });

    return res.json(orcamentoFamiliar);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const orcamentoFamiliarRepository = new OrcamentoFamiliarRepository();

    const deleteOrcamentoFamiliar = new DeleteOrcamentoFamiliarService(
      orcamentoFamiliarRepository,
    );

    const orcamentoFamiliar = await deleteOrcamentoFamiliar.execute(id);

    return res.json(orcamentoFamiliar);
  }
}

export default OrcamentoFamiliarController;
