import AppError from '../../../shared/error/AppError';
import IPermissaoRepository from '../../permissao/repositories/IPermissaoRepository';
import ICreateTipoDePessoaDTO from '../dtos/ICreateTipoDePessoaDTO';
import TipoDePessoa from '../infra/typeorm/entities/TipoDePessoa';
import ITipoDePessoaRepository from '../repositories/ITipoDePessoaRepository';

class CreateTipoDePessoaService {
  private tipoDePessoaRepository: ITipoDePessoaRepository;

  private permissaoRepository: IPermissaoRepository;

  constructor(
    tipoDePessoaRepository: ITipoDePessoaRepository,
    permissaoRepository: IPermissaoRepository,
  ) {
    this.tipoDePessoaRepository = tipoDePessoaRepository;
    this.permissaoRepository = permissaoRepository;
  }

  public async execute({
    tipo_de_pessoa,
    permissoes,
  }: ICreateTipoDePessoaDTO): Promise<TipoDePessoa> {
    const checkKindOfPersonExist = await this.tipoDePessoaRepository.findByName(
      tipo_de_pessoa,
    );

    if (checkKindOfPersonExist) {
      throw new AppError('Kind of person already exist');
    }

    const checkPermissionExist = await this.permissaoRepository.findByIds(
      permissoes,
    );

    if (!checkPermissionExist) {
      throw new AppError('Permission does not exist', 404);
    }

    const tipo = await this.tipoDePessoaRepository.create({
      tipo_de_pessoa,
      permissoes: checkPermissionExist,
    });

    return tipo;
  }
}

export default CreateTipoDePessoaService;
