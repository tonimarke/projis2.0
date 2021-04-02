import AppError from '../../../shared/error/AppError';
import ICreatePessoaDTO from '../dtos/ICreatePessoaDTO';
import Pessoa from '../infra/typeorm/entities/Pessoa';
import IPessoaRepository from '../repositories/IPessoaRepository';

class CreatePessoaService {
  private pessoaRepository: IPessoaRepository;

  constructor(pessoaRepository: IPessoaRepository) {
    this.pessoaRepository = pessoaRepository;
  }

  public async execute({
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
  }: ICreatePessoaDTO): Promise<Pessoa> {
    const checkEmailExist = await this.pessoaRepository.findByEmail(email);

    if (checkEmailExist) {
      throw new AppError('Email already exit', 400);
    }

    const pessoa = await this.pessoaRepository.create({
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

    return pessoa;
  }
}

export default CreatePessoaService;
