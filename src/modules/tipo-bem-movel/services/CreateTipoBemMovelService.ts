import ICreateTipoBemMovelDTO from '../dtos/ICreateTipoBemMovelDTO';
import TipoBemMovel from '../infra/typeorm/entities/TipoBemMovel';
import ITipoBemMovelRepository from '../repositories/ITipoBemMovelRepository';

class CreateTipoBemMovelService {
  private tipoBemMovelRepository: ITipoBemMovelRepository;

  constructor(tipoBemMovelRepository: ITipoBemMovelRepository) {
    this.tipoBemMovelRepository = tipoBemMovelRepository;
  }

  public async execute({
    nome,
  }: ICreateTipoBemMovelDTO): Promise<TipoBemMovel> {
    const tipoBemMovel = await this.tipoBemMovelRepository.create({
      nome,
    });

    return tipoBemMovel;
  }
}

export default CreateTipoBemMovelService;
