import AppError from '../../../shared/error/AppError';
import Permissao from '../infra/typeorm/entities/Permissao';
import IPermissaoRepository from '../repositories/IPermissaoRepository';

class FindOnePermissaoService {
  private permissaoRepository: IPermissaoRepository;

  constructor(permissaoRepository: IPermissaoRepository) {
    this.permissaoRepository = permissaoRepository;
  }

  public async execute(id: string): Promise<Permissao | undefined> {
    const permissao = await this.permissaoRepository.findById(id);

    if (!permissao) {
      throw new AppError('Permissao does not exist', 404);
    }

    return permissao;
  }
}

export default FindOnePermissaoService;
