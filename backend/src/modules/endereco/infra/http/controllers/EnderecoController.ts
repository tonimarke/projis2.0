import { Request, Response } from 'express';

import CreateEnderecoService from '../../../services/CreateEnderecoService';
import FindAllEnderecoService from '../../../services/FindAllEnderecoService';
import FindOneEnderecoService from '../../../services/FindOneEnderecoService';
import UpdateEnderecoService from '../../../services/UpdateEnderecoService';
import DeleteEnderecoService from '../../../services/DeleteEnderecoService';

import EnderecoRepository from '../../typeorm/repositories/EnderecoRepository';

class EnderecoController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      logradouro,
      numero,
      bairro,
      complemento,
      cep,
      cidade,
      estado,
    } = req.body;

    const enderecoRepository = new EnderecoRepository();

    const createEndereco = new CreateEnderecoService(enderecoRepository);

    const endereco = await createEndereco.execute({
      logradouro,
      numero,
      bairro,
      complemento,
      cep,
      cidade,
      estado,
    });

    return res.json(endereco);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const enderecoRepository = new EnderecoRepository();

    const findAllEndereco = new FindAllEnderecoService(enderecoRepository);

    const enderecoes = await findAllEndereco.execute();

    return res.json(enderecoes);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const enderecoRepository = new EnderecoRepository();

    const findOneEndereco = new FindOneEnderecoService(enderecoRepository);

    const enderecoes = await findOneEndereco.execute(id);

    return res.json(enderecoes);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {
      id,
      logradouro,
      numero,
      bairro,
      complemento,
      cep,
      cidade,
      estado,
    } = req.body;

    const enderecoRepository = new EnderecoRepository();

    const updateEndereco = new UpdateEnderecoService(enderecoRepository);

    const endereco = await updateEndereco.execute({
      id,
      logradouro,
      numero,
      bairro,
      complemento,
      cep,
      cidade,
      estado,
    });

    return res.json(endereco);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const enderecoRepository = new EnderecoRepository();

    const deleteEndereco = new DeleteEnderecoService(enderecoRepository);

    const enderecoes = await deleteEndereco.execute(id);

    return res.json(enderecoes);
  }
}

export default EnderecoController;
