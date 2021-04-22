import { getRepository, Repository } from 'typeorm';
import ICreatePermissaoDTO from '../../../dtos/ICreatePermissaoDTO';
import IPermissaoRepository from '../../../repositories/IPermissaoRepository';
import Permissao from '../entities/Permissao';

class PermissaoRepository implements IPermissaoRepository {
  private ormRepository: Repository<Permissao>;

  constructor() {
    this.ormRepository = getRepository(Permissao);
  }

  public async create(dataPermissao: ICreatePermissaoDTO): Promise<Permissao> {
    const permissao = this.ormRepository.create(dataPermissao);

    await this.ormRepository.save(permissao);

    return permissao;
  }

  public async findAll(): Promise<Permissao[] | undefined> {
    const permissoes = await this.ormRepository.find();

    return permissoes;
  }

  public async findById(id: string): Promise<Permissao | undefined> {
    const permissao = await this.ormRepository.findOne(id);

    return permissao;
  }

  public async findByIds(
    permissao: string[],
  ): Promise<Permissao[] | undefined> {
    const permissoes = await this.ormRepository.findByIds(permissao);

    return permissoes;
  }

  public async save(dataPermissao: ICreatePermissaoDTO): Promise<void> {
    await this.ormRepository.save(dataPermissao);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Permissaion deleted successfully';
  }
}

export default PermissaoRepository;
