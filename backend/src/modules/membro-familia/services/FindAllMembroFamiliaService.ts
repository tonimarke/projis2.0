import AppError from '../../../shared/error/AppError';
import MembroFamilia from '../infra/typeorm/entities/MembroFamilia';
import IMembroFamiliaRepository from '../repositories/IMembroFamiliaRepository';

class FindAllMembroFamiliaService {
  private membroFamiliaRepository: IMembroFamiliaRepository;

  constructor(membroFamiliaRepository: IMembroFamiliaRepository) {
    this.membroFamiliaRepository = membroFamiliaRepository;
  }

  public async execute(): Promise<MembroFamilia[]> {
    const membrosFamilia = await this.membroFamiliaRepository.findAll();

    if (!membrosFamilia?.length) {
      throw new AppError('Membro Familia does not exist', 404);
    }

    return membrosFamilia;
  }
}

export default FindAllMembroFamiliaService;
