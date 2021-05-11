import { Brackets, getRepository, Repository } from 'typeorm';
import ICreatePessoaDTO from '../../../dtos/ICreatePessoaDTO';
import IPessoaRepository from '../../../repositories/IPessoaRepository';
import Pessoa from '../entities/Pessoa';

class PessoaRepository implements IPessoaRepository {
  private ormRepository: Repository<Pessoa>;

  constructor() {
    this.ormRepository = getRepository(Pessoa);
  }

  public async create(dataPessoa: ICreatePessoaDTO): Promise<Pessoa> {
    const pessoa = this.ormRepository.create(dataPessoa);

    await this.ormRepository.save(pessoa);

    return pessoa;
  }

  public async findAll(): Promise<Pessoa[] | undefined> {
    const pessoas = await this.ormRepository.find({
      relations: ['tipo_de_pessoa'],
    });

    return pessoas;
  }

  public async findById(id: string): Promise<Pessoa | undefined> {
    const pessoa = await this.ormRepository.findOne(id);

    return pessoa;
  }

  public async findByTypePerson(name: string): Promise<Pessoa[] | undefined> {
    const pessoas = await this.ormRepository
      .createQueryBuilder('pessoas')
      .innerJoinAndSelect('pessoas.tipo_de_pessoa', 'tipos_de_pessoas')
      .where('tipos_de_pessoas.tipo_de_pessoa = :tipo_de_pessoa', {
        tipo_de_pessoa: name,
      })
      .getMany();

    return pessoas;
  }

  public async findByTypePersonSearch(
    name: string,
    search: string,
  ): Promise<Pessoa[] | undefined> {
    const formattedQuery = search.trim().replace(/ /g, ' & ');

    const pessoa = await this.ormRepository
      .createQueryBuilder('pessoas')
      .innerJoinAndSelect('pessoas.tipo_de_pessoa', 'tipos_de_pessoas')
      .where('tipos_de_pessoas.tipo_de_pessoa = :tipo_de_pessoa', {
        tipo_de_pessoa: name,
      })
      .andWhere(
        new Brackets(qb => {
          qb.where(
            `to_tsvector('simple', pessoas.nome) @@ to_tsquery('simple', :query)`,
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

  public async findByTypeESA(): Promise<Pessoa[] | undefined> {
    const pessoas = await this.ormRepository.find({
      relations: ['tipo_de_pessoa'],
      // where: [{ tipo_de_pessoa: { tipo_de_pessoa: 'Estagiario' } }],
    });

    return pessoas;
  }

  /*
  public async findByTypePerson(
    name: string,
    search: string,
  ): Promise<Pessoa[] | undefined> {
    const ormRepository = getManager();
    const pessoas = ormRepository.query(`
      SELECT
      *,
      tipos_de_pessoas.id,
      tipos_de_pessoas.tipo_de_pessoa
      FROM pessoas
      INNER JOIN tipos_de_pessoas ON pessoas.tipo_de_pessoa_id = tipos_de_pessoas.id
      WHERE tipos_de_pessoas.tipo_de_pessoa = '${name}'
      AND
      pessoas.nome = '${search || ''}' OR
      pessoas.rg = '${search || ''}' OR
      pessoas.cpf = '${search || ''}' OR
      pessoas.email = '${search || ''}'

    `);

    return pessoas;

  }

  */

  public async findByEmail(email: string): Promise<Pessoa | undefined> {
    const pessoa = await this.ormRepository.findOne({ where: { email } });

    return pessoa;
  }

  public async save(dataPessoa: ICreatePessoaDTO): Promise<void> {
    await this.ormRepository.save(dataPessoa);
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Person deleted with succefully';
  }
}

export default PessoaRepository;
