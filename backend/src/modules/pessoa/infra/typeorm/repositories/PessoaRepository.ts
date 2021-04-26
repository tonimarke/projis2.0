import { getRepository, Repository } from 'typeorm';
import ICreatePessoaDTO from '../../../dtos/ICreatePessoaDTO';
import IPessoaRepository from '../../../repositories/IPessoaRepository';
import Pessoa from '../entities/Pessoa';

class PessoaRepository implements IPessoaRepository {
  private ormRepository: Repository<Pessoa>;

  constructor() {
    this.ormRepository = getRepository(Pessoa);
  }

  public async create(dataPessoa: ICreatePessoaDTO): Promise<Pessoa> {
    const pessoa = this.ormRepository.create(dataPessoa);

    await this.ormRepository.save(pessoa);

    return pessoa;
  }

  public async findAll(): Promise<Pessoa[] | undefined> {
    const pessoas = await this.ormRepository.find();

    return pessoas;
  }

  public async findById(id: string): Promise<Pessoa | undefined> {
    const pessoa = await this.ormRepository.findOne(id);

    return pessoa;
  }

  public async findByEmail(email: string): Promise<Pessoa | undefined> {
    const pessoa = await this.ormRepository.findOne({ where: { email } });

    return pessoa;
  }

  public async save(dataPessoa: ICreatePessoaDTO): Promise<void> {
    await this.ormRepository.save(dataPessoa);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Person deleted with succefully';
  }
}

export default PessoaRepository;
