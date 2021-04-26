import AppError from '../../../shared/error/AppError';
import IPermissaoRepository from '../repositories/IPermissaoRepository';

class DeletePermissaoService {
  private permissaoRepository: IPermissaoRepository;

  constructor(permissaoRepository: IPermissaoRepository) {
    this.permissaoRepository = permissaoRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkPermissaoExist = await this.permissaoRepository.findById(id);

    if (!checkPermissaoExist) {
      throw new AppError('Permissao does not exist', 404);
    }

    const permissao = await this.permissaoRepository.delete(id);

    return permissao;
  }
}

export default DeletePermissaoService;
