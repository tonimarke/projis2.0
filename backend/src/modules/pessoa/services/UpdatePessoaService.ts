import AppError from '../../../shared/error/AppError';
import IUpdatePessoaDTO from '../dtos/IUpdatePessoaDTO';
import Pessoa from '../infra/typeorm/entities/Pessoa';
import IPessoaRepository from '../repositories/IPessoaRepository';

class UpdatePessoaService {
  private pessoaRepository: IPessoaRepository;

  constructor(pessoaRepository: IPessoaRepository) {
    this.pessoaRepository = pessoaRepository;
  }

  public async execute({
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
  }: IUpdatePessoaDTO): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findById(id);

    if (!pessoa) {
      throw new AppError('Person does not exits', 404);
    }

    const checkEmailExist = await this.pessoaRepository.findByEmail(email);

    if (checkEmailExist) {
      throw new AppError('Email already exist', 400);
    }

    pessoa.nome = nome;
    pessoa.rg = rg;
    pessoa.cpf = cpf;
    pessoa.email = email;
    pessoa.nome_pai = nome_pai;
    pessoa.nome_mae = nome_mae;
    pessoa.data_nascimento = data_nascimento;
    pessoa.religiao = religiao;
    pessoa.previdencia_social = previdencia_social;
    pessoa.bpc = bpc;
    pessoa.sindicalizado = sindicalizado;
    pessoa.situacao = situacao;
    pessoa.observacoes = observacoes;
    pessoa.inicio_vinculo = inicio_vinculo;
    pessoa.termino_vinculo = termino_vinculo;
    pessoa.curso = curso;
    pessoa.periodo = periodo;
    pessoa.profissao = profissao;
    pessoa.oab = oab;
    pessoa.ocupacao = ocupacao;

    await this.pessoaRepository.save(pessoa);

    return pessoa;
  }
}

export default UpdatePessoaService;
