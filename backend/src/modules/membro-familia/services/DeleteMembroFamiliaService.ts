import AppError from '../../../shared/error/AppError';
import IMembroFamiliaRepository from '../repositories/IMembroFamiliaRepository';

class DeleteMembroFamiliaService {
  private membroFamiliaRepository: IMembroFamiliaRepository;

  constructor(membroFamiliaRepository: IMembroFamiliaRepository) {
    this.membroFamiliaRepository = membroFamiliaRepository;
  }

  public async execute(id: string): Promise<string> {
    const checkMembroFamiliaExist = await this.membroFamiliaRepository.findById(
      id,
    );

    if (!checkMembroFamiliaExist) {
      throw new AppError('Membro Familia does not exist', 404);
    }

    const membroFamilia = await this.membroFamiliaRepository.delete(id);

    return membroFamilia;
  }
}

export default DeleteMembroFamiliaService;
