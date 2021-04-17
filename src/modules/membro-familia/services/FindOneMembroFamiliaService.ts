import AppError from '../../../shared/error/AppError';
import MembroFamilia from '../infra/typeorm/entities/MembroFamilia';
import IMembroFamiliaRepository from '../repositories/IMembroFamiliaRepository';

class FindOneMembroFamiliaService {
  private membroFamiliaRepository: IMembroFamiliaRepository;

  constructor(membroFamiliaRepository: IMembroFamiliaRepository) {
    this.membroFamiliaRepository = membroFamiliaRepository;
  }

  public async execute(id: string): Promise<MembroFamilia> {
    const membroFamilia = await this.membroFamiliaRepository.findById(id);

    if (!membroFamilia) {
      throw new AppError('Membro Familia does not exist', 404);
    }

    return membroFamilia;
  }
}

export default FindOneMembroFamiliaService;
