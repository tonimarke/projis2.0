import AppError from '../../../shared/error/AppError';
import Permissao from '../infra/typeorm/entities/Permissao';
import IPermissaoRepository from '../repositories/IPermissaoRepository';

class FindAllPermissaoService {
  private permissaoRepository: IPermissaoRepository;

  constructor(permissaoRepository: IPermissaoRepository) {
    this.permissaoRepository = permissaoRepository;
  }

  public async execute(): Promise<Permissao[]> {
    const permissao = await this.permissaoRepository.findAll();

    if (!permissao?.length) {
      throw new AppError('Permissao does not exist', 404);
    }

    return permissao;
  }
}

export default FindAllPermissaoService;
