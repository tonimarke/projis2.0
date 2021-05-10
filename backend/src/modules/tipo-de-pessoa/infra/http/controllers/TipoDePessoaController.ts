import { Request, Response } from 'express';

import CreateTipoDePessoaService from '../../../services/CreateTipoDePessoaService';
import FindAllTipoDePessoaService from '../../../services/FindAllTipoDePessoaService';
import FindOneTipoDePessoaService from '../../../services/FindOneTipoDePessoaService';
import FindByNameTipoDePessoaService from '../../../services/FindByNameTipoDePessoaService';
import UpdateTipoDePessoaService from '../../../services/UpdateTipoDePessoaService';
import DeleteTipoDePessoaService from '../../../services/DeleteTipoDePessoaService';

import TipoDePessoaRepository from '../../typeorm/repositories/TipoDePessoaRepository';
import PermissaoRepository from '../../../../permissao/infra/typeorm/repositories/PermissaoRepository';

class TipoDePessoaController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { tipo_de_pessoa, permissoes } = req.body;

    const tipoDePessoaRepository = new TipoDePessoaRepository();
    const permissaoRepository = new PermissaoRepository();

    const createTipoDePessoa = new CreateTipoDePessoaService(
      tipoDePessoaRepository,
      permissaoRepository,
    );

    const tipoDePessoa = await createTipoDePessoa.execute({
      tipo_de_pessoa,
      permissoes,
    });

    return res.json(tipoDePessoa);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const tipoDePessoaRepository = new TipoDePessoaRepository();

    const findAllTipoDePessoa = new FindAllTipoDePessoaService(
      tipoDePessoaRepository,
    );

    const tiposDePessoas = await findAllTipoDePessoa.execute();

    return res.json(tiposDePessoas);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const tipoDePessoaRepository = new TipoDePessoaRepository();

    const findOneTipoDePessoa = new FindOneTipoDePessoaService(
      tipoDePessoaRepository,
    );

    const tipoDePessoa = await findOneTipoDePessoa.execute(id);

    return res.json(tipoDePessoa);
  }

  public async findByName(req: Request, res: Response): Promise<Response> {
    const { tipo_de_pessoa } = req.params;

    const tipoDePessoaRepository = new TipoDePessoaRepository();

    const findByNameTipoDePessoa = new FindByNameTipoDePessoaService(
      tipoDePessoaRepository,
    );

    const tipoDePessoa = await findByNameTipoDePessoa.execute(tipo_de_pessoa);

    return res.json(tipoDePessoa);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, tipo_de_pessoa } = req.body;

    const tipoDePessoaRepository = new TipoDePessoaRepository();

    const updateTipoDePessoa = new UpdateTipoDePessoaService(
      tipoDePessoaRepository,
    );

    const tipoDePessoa = await updateTipoDePessoa.execute({
      id,
      tipo_de_pessoa,
    });

    return res.json(tipoDePessoa);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const tipoDePessoaRepository = new TipoDePessoaRepository();

    const deleteTipoDePessoa = new DeleteTipoDePessoaService(
      tipoDePessoaRepository,
    );

    const tipoDePessoa = await deleteTipoDePessoa.execute(id);

    return res.json(tipoDePessoa);
  }
}

export default TipoDePessoaController;
