import { Brackets, getRepository, Repository } from 'typeorm';
import ICreateProntuarioDTO from '../../../dtos/ICreateProntuarioDTO';
import IProntuarioRepository from '../../../repositories/IProntuarioRepository';
import Prontuario from '../entities/Prontuario';

class ProntuarioRepository implements IProntuarioRepository {
  private ormRepository: Repository<Prontuario>;

  constructor() {
    this.ormRepository = getRepository(Prontuario);
  }

  public async create(
    dataProntuario: ICreateProntuarioDTO,
  ): Promise<Prontuario> {
    const prontuario = this.ormRepository.create(dataProntuario);

    await this.ormRepository.save(prontuario);

    return prontuario;
  }

  public async findAll(): Promise<Prontuario[] | undefined> {
    const prontuarios = await this.ormRepository.find();

    return prontuarios;
  }

  public async findById(id: string): Promise<Prontuario | undefined> {
    const prontuario = await this.ormRepository.findOne(id);

    return prontuario;
  }

  public async findByRecordSearch(
    search: string,
  ): Promise<Prontuario[] | undefined> {
    const formattedQuery = search.trim().replace(/ /g, ' & ');

    console.log(formattedQuery);

    const prontuarios = await this.ormRepository
      .createQueryBuilder('prontuarios')
      .innerJoinAndSelect('prontuarios.acao', 'acao')
      .innerJoinAndSelect('prontuarios.estagiarios', 'estagiario')
      .innerJoinAndSelect('prontuarios.encaminhados', 'encaminhado')
      .innerJoinAndSelect('prontuarios.entrevistados', 'entrevistado')
      .where(
        new Brackets(qb => {
          qb.where(
            `to_tsvector('simple', prontuarios.motivo_procura) @@ to_tsquery('simple', :query)`,
            { query: `${formattedQuery}:*` },
          )
            .orWhere(
              `to_tsvector('simple', estagiario.nome) @@ to_tsquery('simple', :query)`,
              { query: `${formattedQuery}:*` },
            )
            .orWhere(
              `to_tsvector('simple', encaminhado.nome) @@ to_tsquery('simple', :query)`,
              { query: `${formattedQuery}:*` },
            )
            .orWhere(
              `to_tsvector('simple', entrevistado.nome) @@ to_tsquery('simple', :query)`,
              { query: `${formattedQuery}:*` },
            );
        }),
      )
      .getMany();

    return prontuarios;
  }

  public async save(dataProntuario: ICreateProntuarioDTO): Promise<void> {
    await this.ormRepository.save(dataProntuario);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Prontuario deleted with succefully';
  }
}

export default ProntuarioRepository;
