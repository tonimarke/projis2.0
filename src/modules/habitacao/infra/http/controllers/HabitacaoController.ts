import { Request, Response } from 'express';
import CreateHabitacaoService from '../../../services/CreateHabitacaoService';
import DeleteHabitacaoService from '../../../services/DeleteHabitacaoService';
import FindAllHabitacaoService from '../../../services/FindAllHabitacaoService';
import FindOneHabitacaoService from '../../../services/FindOneHabitacaoService';
import UpdateHabitacaoService from '../../../services/UpdateHabitacaoService';
import HabitacaoRepository from '../../typeorm/repositories/HabitacaoRepository';

class HabitacaoController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
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
    } = req.body;

    const habitacaoRepository = new HabitacaoRepository();

    const createHabitacao = new CreateHabitacaoService(habitacaoRepository);

    const habitacao = await createHabitacao.execute({
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
    });

    return res.json(habitacao);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const habitacaoRepository = new HabitacaoRepository();

    const findAllHabitacao = new FindAllHabitacaoService(habitacaoRepository);

    const habitacoes = await findAllHabitacao.execute();

    return res.json(habitacoes);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const habitacaoRepository = new HabitacaoRepository();

    const findOneHabitacao = new FindOneHabitacaoService(habitacaoRepository);

    const habitacao = await findOneHabitacao.execute(id);

    return res.json(habitacao);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {
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
    } = req.body;

    const habitacaoRepository = new HabitacaoRepository();

    const updateHabitacao = new UpdateHabitacaoService(habitacaoRepository);

    const habitacao = await updateHabitacao.execute({
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
    });

    return res.json(habitacao);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const habitacaoRepository = new HabitacaoRepository();

    const deleteHabitacao = new DeleteHabitacaoService(habitacaoRepository);

    const habitacao = await deleteHabitacao.execute(id);

    return res.json(habitacao);
  }
}

export default HabitacaoController;
