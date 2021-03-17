import ICreateBemImovelDTO from '../dtos/ICreateBemImovelDTO';
import BemImovel from '../infra/typeorm/entities/BemImovel';
import IBemImovelRepository from '../repositories/IBemImovelRepository';

class CreateBemImovelService {
  private bemImovelRepository: IBemImovelRepository;

  constructor(bemImovelRepository: IBemImovelRepository) {
    this.bemImovelRepository = bemImovelRepository;
  }

  public async execute({
    nome,
    valor,
    quantidade,
    tipo_bem_imovel_id,
  }: ICreateBemImovelDTO): Promise<BemImovel> {
    const bemImovel = await this.bemImovelRepository.create({
      nome,
      valor,
      quantidade,
      tipo_bem_imovel_id,
    });

    return bemImovel;
  }
}

export default CreateBemImovelService;
