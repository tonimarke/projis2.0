import ICreatePermissaoDTO from '../dtos/ICreatePermissaoDTO';
import Permissao from '../infra/typeorm/entities/Permissao';

export default interface IPermissaoRepository {
  create(dataPermissao: ICreatePermissaoDTO): Promise<Permissao>;
  findAll(): Promise<Permissao[] | undefined>;
  findById(id: string): Promise<Permissao | undefined>;
  findByIds(permissao: string[]): Promise<Permissao[] | undefined>;
  save(dataPermissao: ICreatePermissaoDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
