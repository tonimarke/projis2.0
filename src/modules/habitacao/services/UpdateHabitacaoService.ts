import AppError from '../../../shared/error/AppError';
import Habitacao from '../infra/typeorm/entities/Habitacao';
import IHabitacaoRepository from '../repositories/IHabitacaoRepository';

interface IRequest {
  id: string;
  situacao: string;
  valor_aluguel: number;
  quantidade_dormitorios: number;
  quantidade_salas: number;
  quantidade_copas: number;
  quantidade_cozinhas: number;
  quantidade_areas_servico: number;
  quantidade_garagens: number;
  pintura: string;
  piso: string;
  contra_piso: number;
  laje: number;
  forro_madeira: number;
  sem_forro: number;
}

class UpdateHabitacaoService {
  private habitacaoRepository: IHabitacaoRepository;

  constructor(habitacaoRepository: IHabitacaoRepository) {
    this.habitacaoRepository = habitacaoRepository;
  }

  public async execute({
    id,
    situacao,
    valor_aluguel,
    quantidade_dormitorios,
    quantidade_salas,
    quantidade_copas,
    quantidade_cozinhas,
    quantidade_areas_servico,
    quantidade_garagens,
    pintura,
    piso,
    contra_piso,
    laje,
    forro_madeira,
    sem_forro,
  }: IRequest): Promise<Habitacao> {
    const habitacao = await this.habitacaoRepository.findById(id);

    if (!habitacao) {
      throw new AppError('habitation does not exist', 404);
    }

    habitacao.situacao = situacao;
    habitacao.valor_aluguel = valor_aluguel;
    habitacao.quantidade_dormitorios = quantidade_dormitorios;
    habitacao.quantidade_salas = quantidade_salas;
    habitacao.quantidade_copas = quantidade_copas;
    habitacao.quantidade_cozinhas = quantidade_cozinhas;
    habitacao.quantidade_areas_servico = quantidade_areas_servico;
    habitacao.quantidade_garagens = quantidade_garagens;
    habitacao.pintura = pintura;
    habitacao.piso = piso;
    habitacao.contra_piso = contra_piso;
    habitacao.laje = laje;
    habitacao.forro_madeira = forro_madeira;
    habitacao.sem_forro = sem_forro;

    await this.habitacaoRepository.save(habitacao);

    return habitacao;
  }
}

export default UpdateHabitacaoService;
