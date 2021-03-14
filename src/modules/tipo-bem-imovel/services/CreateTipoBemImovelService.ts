import ICreateTipoBemImovelDTO from '../dtos/ICreateTipoBemImovelDTO';
import TipoBemImovel from '../infra/typeorm/entities/TipoBemImovel';
import ITipoBemImovelRepository from '../repositories/ITipoBemImovelRepository';

class CreateTipoBemImovelService {
  private tipoBemImovelRepository: ITipoBemImovelRepository;

  constructor(tipoBemImovelRepository: ITipoBemImovelRepository) {
    this.tipoBemImovelRepository = tipoBemImovelRepository;
  }

  public async execute({
    nome,
  }: ICreateTipoBemImovelDTO): Promise<TipoBemImovel> {
    const tipoBemImovel = await this.tipoBemImovelRepository.create({
      nome,
    });

    return tipoBemImovel;
  }
}

export default CreateTipoBemImovelService;
