import { Request, Response } from 'express';

import CreateProntuarioService from '../../../services/CreateProntuarioService';
import FindAllProntuarioService from '../../../services/FindAllProntuarioService';
import FindOneProntuarioService from '../../../services/FindOneProntuarioService';
import UpdateProntuarioService from '../../../services/UpdateProntuarioService';
import DeleteProntuarioService from '../../../services/DeleteProntuarioService';

import ProntuarioRepository from '../../typeorm/repositories/ProntuarioRepository';

class ProntuarioController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      motivo_procura,
      dec_hipo,
      data_abertura,
      data_encerramento,
      telefone,
      gasto_familiar,
      status_habitacao,
      status_saude,
      valor_bens_imoveis,
      valor_bens_moveis,
      sinotico,
      acao_id,
      estagiario_id,
      encaminhado_por_id,
      entrevistado_por_id,
    } = req.body;

    const prontuarioRepository = new ProntuarioRepository();

    const createProntuario = new CreateProntuarioService(prontuarioRepository);

    const prontuario = await createProntuario.execute({
      motivo_procura,
      dec_hipo,
      data_abertura,
      data_encerramento,
      telefone,
      gasto_familiar,
      status_habitacao,
      status_saude,
      valor_bens_imoveis,
      valor_bens_moveis,
      sinotico,
      acao_id,
      estagiario_id,
      encaminhado_por_id,
      entrevistado_por_id,
    });

    return res.json(prontuario);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const prontuarioRepository = new ProntuarioRepository();

    const findAllProntuario = new FindAllProntuarioService(
      prontuarioRepository,
    );

    const prontuarios = await findAllProntuario.execute();

    return res.json(prontuarios);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const prontuarioRepository = new ProntuarioRepository();

    const findOneProntuario = new FindOneProntuarioService(
      prontuarioRepository,
    );

    const prontuario = await findOneProntuario.execute(id);

    return res.json(prontuario);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {
      id,
      motivo_procura,
      dec_hipo,
      telefone,
      gasto_familiar,
      status_habitacao,
      status_saude,
      valor_bens_imoveis,
      valor_bens_moveis,
      sinotico,
      data_abertura,
      data_encerramento,
    } = req.body;

    const prontuarioRepository = new ProntuarioRepository();

    const updateProntuario = new UpdateProntuarioService(prontuarioRepository);

    const prontuario = await updateProntuario.execute({
      id,
      motivo_procura,
      dec_hipo,
      telefone,
      gasto_familiar,
      status_habitacao,
      status_saude,
      valor_bens_imoveis,
      valor_bens_moveis,
      sinotico,
      data_abertura,
      data_encerramento,
    });

    return res.json(prontuario);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const prontuarioRepository = new ProntuarioRepository();

    const deleteProntuario = new DeleteProntuarioService(prontuarioRepository);

    const prontuario = await deleteProntuario.execute(id);

    return res.json(prontuario);
  }
}

export default ProntuarioController;
