import ICreateBemMovelDTO from '../dtos/ICreateBemMovelDTO';
import BemMovel from '../infra/typeorm/entities/BemMovel';
import IBemMovelRepository from '../repositories/IBemMovelRepository';

class CreateBemMovelService {
  private bemMovelRepository: IBemMovelRepository;

  constructor(bemMovelRepository: IBemMovelRepository) {
    this.bemMovelRepository = bemMovelRepository;
  }

  public async execute({
    nome,
    valor,
    quantidade,
    tipo_bem_movel_id,
    prontuario_id,
  }: ICreateBemMovelDTO): Promise<BemMovel> {
    const bemMovel = await this.bemMovelRepository.create({
      nome,
      valor,
      quantidade,
      tipo_bem_movel_id,
      prontuario_id,
    });

    return bemMovel;
  }
}

export default CreateBemMovelService;
