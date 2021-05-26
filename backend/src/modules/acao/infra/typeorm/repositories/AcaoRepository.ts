import { Brackets, getRepository, Repository } from 'typeorm';
import ICreateAcaoDTO from '../../../dtos/ICreateAcaoDTO';
import IAcaoRepository from '../../../repositories/IAcaoRepository';
import Acao from '../entities/Acao';

class AcaoRepository implements IAcaoRepository {
  private ormRepository: Repository<Acao>;

  constructor() {
    this.ormRepository = getRepository(Acao);
  }

  public async create(dataAcao: ICreateAcaoDTO): Promise<Acao> {
    const acao = this.ormRepository.create(dataAcao);

    await this.ormRepository.save(acao);

    return acao;
  }

  public async findAll(): Promise<Acao[] | undefined> {
    const acoes = await this.ormRepository.find({
      relations: ['cliente', 'parte_contraria', 'tipos_de_acoes'],
    });

    return acoes;
  }

  public async findById(id: string): Promise<Acao | undefined> {
    const acao = await this.ormRepository.findOne(id, {
      relations: ['tipos_de_acoes'],
    });

    return acao;
  }

  public async findByActionSearch(search: string): Promise<Acao[] | undefined> {
    const formattedQuery = search.trim().replace(/ /g, ' & ');

    const pessoa = await this.ormRepository
      .createQueryBuilder('acoes')
      .innerJoinAndSelect('acoes.cliente', 'pessoas')
      .innerJoinAndSelect('acoes.parte_contraria', 'pessoas')
      .where(
        new Brackets(qb => {
          qb.where(
            `to_tsvector('simple', acoes.providencias) @@ to_tsquery('simple', :query)`,
            { query: `${formattedQuery}:*` },
          )
            .orWhere(
              `to_tsvector(['simple', pessoas.nome) @@ to_tsquery('simple', :query)`,
              { query: `${formattedQuery}:*` },
            )
            .orWhere(
              `to_tsvector('simple', pessoas.rg) @@ to_tsquery('simple', :query)`,
              { query: `${formattedQuery}:*` },
            )
            .orWhere(
              `to_tsvector('simple', pessoas.cpf) @@ to_tsquery('simple', :query)`,
              { query: `${formattedQuery}:*` },
            )
            .orWhere(
              `to_tsvector('simple', pessoas.email) @@ to_tsquery('simple', :query)`,
              { query: `${formattedQuery}:*` },
            );
        }),
      )
      .getMany();

    return pessoa;
  }

  public async save(dataAcao: ICreateAcaoDTO): Promise<void> {
    await this.ormRepository.save(dataAcao);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Action deleted successfully';
  }
}

export default AcaoRepository;
