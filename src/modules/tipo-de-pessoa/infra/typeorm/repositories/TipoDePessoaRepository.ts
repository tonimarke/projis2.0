import { getRepository, Like, Repository } from 'typeorm';
import ITipoDePessoaRepository from '../../../repositories/ITipoDePessoaRepository';
import TipoDePessoa from '../entities/TipoDePessoa';

class TipoDePessoaRepository implements ITipoDePessoaRepository {
  private ormRepository: Repository<TipoDePessoa>;

  constructor() {
    this.ormRepository = getRepository(TipoDePessoa);
  }

  public async create(tipo_de_pessoa: string): Promise<TipoDePessoa> {
    const tipo = this.ormRepository.create({
      tipo_de_pessoa,
    });

    await this.ormRepository.save(tipo);

    return tipo;
  }

  public async findAll(): Promise<TipoDePessoa[] | undefined> {
    const tipos = await this.ormRepository.find();

    return tipos;
  }

  public async findById(id: string): Promise<TipoDePessoa | undefined> {
    const tipo = await this.ormRepository.findOne(id);

    return tipo;
  }

  public async findByName(
    tipo_de_pessoa: string,
  ): Promise<TipoDePessoa | undefined> {
    const tipo = await this.ormRepository.findOne({
      tipo_de_pessoa: Like(`%${tipo_de_pessoa}%`),
    });

    return tipo;
  }

  public async save(tipo_de_pessoa: TipoDePessoa): Promise<void> {
    await this.ormRepository.save(tipo_de_pessoa);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Kind of person deleted successfully';
  }
}

export default TipoDePessoaRepository;
