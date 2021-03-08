import Endereco from '../infra/typeorm/entities/Endereco';
import ICreateEnderecoDTO from '../dtos/ICreateEnderecoDTO';
import IEnderecoRepository from '../repositories/IEnderecoRepository';

class CreateEnderecoService {
  private enderecoRepository: IEnderecoRepository;

  constructor(enderecoRepository: IEnderecoRepository) {
    this.enderecoRepository = enderecoRepository;
  }

  public async execute(dataEndereco: ICreateEnderecoDTO): Promise<Endereco> {
    const endereco = await this.enderecoRepository.create(dataEndereco);

    return endereco;
  }
}

export default CreateEnderecoService;
