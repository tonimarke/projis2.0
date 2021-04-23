import ICreateUsuarioDTO from '../dtos/ICreateUsuarioDTO';
import Usuario from '../infra/typeorm/entities/Usuario';

export default interface IUsuarioRepository {
  create(dataUsuario: ICreateUsuarioDTO): Promise<Usuario>;
  findAll(): Promise<Usuario[] | undefined>;
  findById(id: string): Promise<Usuario | undefined>;
  findByEmail(email: string): Promise<Usuario | undefined>;
  save(dataUsuario: ICreateUsuarioDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
