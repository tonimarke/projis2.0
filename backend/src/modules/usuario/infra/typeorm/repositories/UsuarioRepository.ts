import { getRepository, Repository } from 'typeorm';
import ICreateUsuarioDTO from '../../../dtos/ICreateUsuarioDTO';
import IUsuarioRepository from '../../../repositories/IUsuarioRepository';
import Usuario from '../entities/Usuario';

class UsuarioRepository implements IUsuarioRepository {
  private ormRepository: Repository<Usuario>;

  constructor() {
    this.ormRepository = getRepository(Usuario);
  }

  public async create(dataUsuario: ICreateUsuarioDTO): Promise<Usuario> {
    const usuario = this.ormRepository.create(dataUsuario);

    await this.ormRepository.save(usuario);

    return usuario;
  }

  public async findAll(): Promise<Usuario[] | undefined> {
    const usuarios = await this.ormRepository.find();

    return usuarios;
  }

  public async findById(id: string): Promise<Usuario | undefined> {
    const usuario = await this.ormRepository.findOne(id);

    return usuario;
  }

  public async findByEmail(email: string): Promise<Usuario | undefined> {
    const usuario = await this.ormRepository.findOne({ where: { email } });

    return usuario;
  }

  public async save(dataUsuario: ICreateUsuarioDTO): Promise<void> {
    await this.ormRepository.save(dataUsuario);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'User deleted with succefully';
  }
}

export default UsuarioRepository;
