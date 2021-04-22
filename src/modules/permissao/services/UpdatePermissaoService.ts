import AppError from '../../../shared/error/AppError';
import IUpdatePermissaoDTO from '../dtos/IUpdatePermissaoDTO';
import Permissao from '../infra/typeorm/entities/Permissao';
import IPermissaoRepository from '../repositories/IPermissaoRepository';

class UpdatePermissaoService {
  private permissaoRepository: IPermissaoRepository;

  constructor(permissaoRepository: IPermissaoRepository) {
    this.permissaoRepository = permissaoRepository;
  }

  public async execute({
    id,
    nome,
    descricao,
  }: IUpdatePermissaoDTO): Promise<Permissao> {
    const permissao = await this.permissaoRepository.findById(id);

    if (!permissao) {
      throw new AppError('Permissao does not exist', 404);
    }

    permissao.nome = nome;
    permissao.descricao = descricao;

    await this.permissaoRepository.save(permissao);

    return permissao;
  }
}

export default UpdatePermissaoService;
