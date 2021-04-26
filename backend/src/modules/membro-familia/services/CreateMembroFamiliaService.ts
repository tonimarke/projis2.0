import ICreateMembroFamiliaDTO from '../dtos/ICreateMembroFamiliaDTO';
import MembroFamilia from '../infra/typeorm/entities/MembroFamilia';
import IMembroFamiliaRepository from '../repositories/IMembroFamiliaRepository';

class CreateMembroFamiliaService {
  private membroFamiliaRepository: IMembroFamiliaRepository;

  constructor(membroFamiliaRepository: IMembroFamiliaRepository) {
    this.membroFamiliaRepository = membroFamiliaRepository;
  }

  public async execute({
    nome,
    data_nascimento,
    parentesco,
    num_filhos,
    escolaridade,
    ocupacao,
    local_trabalho,
    salario,
    observacao,
    estado_civil_id,
  }: ICreateMembroFamiliaDTO): Promise<MembroFamilia> {
    const membroFamilia = await this.membroFamiliaRepository.create({
      nome,
      data_nascimento,
      parentesco,
      num_filhos,
      escolaridade,
      ocupacao,
      local_trabalho,
      salario,
      observacao,
      estado_civil_id,
    });

    return membroFamilia;
  }
}

export default CreateMembroFamiliaService;
