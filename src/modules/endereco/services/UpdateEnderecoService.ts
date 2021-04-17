import AppError from '../../../shared/error/AppError';
import IUpdateEnderecoDTO from '../dtos/IUpdateEnderecoDTO';
import Endereco from '../infra/typeorm/entities/Endereco';
import IEnderecoRepository from '../repositories/IEnderecoRepository';

class UpdateEnderecoService {
  private enderecoRepository: IEnderecoRepository;

  constructor(enderecoRepository: IEnderecoRepository) {
    this.enderecoRepository = enderecoRepository;
  }

  public async execute({
    id,
    logradouro,
    numero,
    bairro,
    complemento,
    cep,
    cidade,
    estado,
  }: IUpdateEnderecoDTO): Promise<Endereco> {
    const endereco = await this.enderecoRepository.findById(id);

    if (!endereco) {
      throw new AppError('Address does not exist', 404);
    }

    endereco.logradouro = logradouro;
    endereco.numero = numero;
    endereco.bairro = bairro;
    endereco.complemento = complemento;
    endereco.cep = cep;
    endereco.cidade = cidade;
    endereco.estado = estado;

    await this.enderecoRepository.save(endereco);

    return endereco;
  }
}

export default UpdateEnderecoService;
