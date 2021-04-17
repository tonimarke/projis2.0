import AppError from '../../../shared/error/AppError';
import IUpdateMembroFamiliaDTO from '../dtos/IUpdateMembroFamiliaDTO';
import MembroFamilia from '../infra/typeorm/entities/MembroFamilia';
import IMembroFamiliaRepository from '../repositories/IMembroFamiliaRepository';

class UpdateMembroFamiliaService {
  private membroFamiliaRepository: IMembroFamiliaRepository;

  constructor(membroFamiliaRepository: IMembroFamiliaRepository) {
    this.membroFamiliaRepository = membroFamiliaRepository;
  }

  public async execute({
    id,
    nome,
    data_nascimento,
    parentesco,
    num_filhos,
    escolaridade,
    ocupacao,
    local_trabalho,
    salario,
    observacao,
  }: IUpdateMembroFamiliaDTO): Promise<MembroFamilia> {
    const membroFamilia = await this.membroFamiliaRepository.findById(id);

    if (!membroFamilia) {
      throw new AppError('Membro Familia does not exist', 404);
    }

    membroFamilia.nome = nome;
    membroFamilia.data_nascimento = data_nascimento;
    membroFamilia.parentesco = parentesco;
    membroFamilia.num_filhos = num_filhos;
    membroFamilia.escolaridade = escolaridade;
    membroFamilia.ocupacao = ocupacao;
    membroFamilia.local_trabalho = local_trabalho;
    membroFamilia.salario = salario;
    membroFamilia.observacao = observacao;

    await this.membroFamiliaRepository.save(membroFamilia);

    return membroFamilia;
  }
}

export default UpdateMembroFamiliaService;
