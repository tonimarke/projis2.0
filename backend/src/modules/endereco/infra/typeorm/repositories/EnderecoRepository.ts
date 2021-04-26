import { getRepository, Repository } from 'typeorm';
import ICreateEnderecoDTO from '../../../dtos/ICreateEnderecoDTO';
import IEnderecoRepository from '../../../repositories/IEnderecoRepository';
import Endereco from '../entities/Endereco';

class EnderecoRepository implements IEnderecoRepository {
  private ormRepository: Repository<Endereco>;

  constructor() {
    this.ormRepository = getRepository(Endereco);
  }

  public async create(dataEndereco: ICreateEnderecoDTO): Promise<Endereco> {
    const endereco = this.ormRepository.create(dataEndereco);

    await this.ormRepository.save(endereco);

    return endereco;
  }

  public async findAll(): Promise<Endereco[] | undefined> {
    const enderecoes = await this.ormRepository.find();

    return enderecoes;
  }

  public async findById(id: string): Promise<Endereco | undefined> {
    const endereco = await this.ormRepository.findOne(id);

    return endereco;
  }

  public async save(dataEndereco: ICreateEnderecoDTO): Promise<void> {
    await this.ormRepository.save(dataEndereco);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Adress deleted successfully';
  }
}

export default EnderecoRepository;
