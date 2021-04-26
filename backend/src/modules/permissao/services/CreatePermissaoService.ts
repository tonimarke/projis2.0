import ICreatePermissaoDTO from '../dtos/ICreatePermissaoDTO';
import Permissao from '../infra/typeorm/entities/Permissao';
import IPermissaoRepository from '../repositories/IPermissaoRepository';

class CreatePermissaoService {
  private permissaoRepository: IPermissaoRepository;

  constructor(permissaoRepository: IPermissaoRepository) {
    this.permissaoRepository = permissaoRepository;
  }

  public async execute({
    nome,
    descricao,
  }: ICreatePermissaoDTO): Promise<Permissao> {
    const permissao = await this.permissaoRepository.create({
      nome,
      descricao,
    });

    return permissao;
  }
}

export default CreatePermissaoService;
