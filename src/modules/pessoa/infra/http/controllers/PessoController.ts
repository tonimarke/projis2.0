import { Request, Response } from 'express';
import CreatePessoaService from '../../../services/CreatePessoaService';
import DeletePessoaService from '../../../services/DeletePessoaService';
import FindAllPessoaService from '../../../services/FindAllPessoaService';
import FindOnePessoaService from '../../../services/FindOnePessoaService';
import UpdatePessoaService from '../../../services/UpdatePessoaService';
import PessoaRepository from '../../typeorm/repositories/PessoaRepository';

class PessoaController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      nome,
      rg,
      cpf,
      email,
      estado_civil_id,
      nome_pai,
      nome_mae,
      data_nascimento,
      endereco_id,
      religiao,
      previdencia_social,
      bpc,
      sindicalizado,
      situacao,
      observacoes,
      inicio_vinculo,
      termino_vinculo,
      curso,
      periodo,
      profissao,
      oab,
      ocupacao,
      tipo_de_pessoa_id,
    } = req.body;

    const pessoaRepository = new PessoaRepository();

    const createPessoa = new CreatePessoaService(pessoaRepository);

    const pessoa = await createPessoa.execute({
      nome,
      rg,
      cpf,
      email,
      estado_civil_id,
      nome_pai,
      nome_mae,
      data_nascimento,
      endereco_id,
      religiao,
      previdencia_social,
      bpc,
      sindicalizado,
      situacao,
      observacoes,
      inicio_vinculo,
      termino_vinculo,
      curso,
      periodo,
      profissao,
      oab,
      ocupacao,
      tipo_de_pessoa_id,
    });

    return res.json(pessoa);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const pessoaRepository = new PessoaRepository();

    const findAllPessoa = new FindAllPessoaService(pessoaRepository);

    const pessoas = await findAllPessoa.execute();

    return res.json(pessoas);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const pessoaRepository = new PessoaRepository();

    const findOnePessoa = new FindOnePessoaService(pessoaRepository);

    const pessoa = await findOnePessoa.execute(id);

    return res.json(pessoa);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {
      id,
      nome,
      rg,
      cpf,
      email,
      nome_pai,
      nome_mae,
      data_nascimento,
      religiao,
      previdencia_social,
      bpc,
      sindicalizado,
      situacao,
      observacoes,
      inicio_vinculo,
      termino_vinculo,
      curso,
      periodo,
      profissao,
      oab,
      ocupacao,
    } = req.body;

    const pessoaRepository = new PessoaRepository();

    const updatePessoa = new UpdatePessoaService(pessoaRepository);

    const pessoa = await updatePessoa.execute({
      id,
      nome,
      rg,
      cpf,
      email,
      nome_pai,
      nome_mae,
      data_nascimento,
      religiao,
      previdencia_social,
      bpc,
      sindicalizado,
      situacao,
      observacoes,
      inicio_vinculo,
      termino_vinculo,
      curso,
      periodo,
      profissao,
      oab,
      ocupacao,
    });

    return res.json(pessoa);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const pessoaRepository = new PessoaRepository();

    const deletePessoa = new DeletePessoaService(pessoaRepository);

    const pessoa = await deletePessoa.execute(id);

    return res.json(pessoa);
  }
}

export default PessoaController;
