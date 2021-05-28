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
    const pessoa = await this.ormRepository.findOne(id, {
      relations: ['endereco', 'estado_civil', 'tipo_de_pessoa'],
    });

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
              `to_tsvector('simple', pessoas.ocupacao) @@ to_tsquery('simple', :query)`,
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
    /*
    const pessoas = await this.ormRepository.query(`
      SELECT
      *,
      tipos_de_pessoas
      FROM pessoas
      INNER JOIN tipos_de_pessoas ON pessoas.tipo_de_pessoa_id = tipos_de_pessoas.id
      WHERE tipos_de_pessoas.tipo_de_pessoa = 'Administrador'
      OR tipos_de_pessoas.tipo_de_pessoa = 'Supervisor'
      OR tipos_de_pessoas.tipo_de_pessoa = 'Estagiário'
    `);
    */

    /*
    const pessoas = await this.ormRepository
      .createQueryBuilder('pessoas')
      .innerJoinAndSelect('pessoas.tipo_de_pessoa', 'tipos_de_pessoas')
      .where('tipos_de_pessoas.tipo_de_pessoa = :tipo_de_pessoa', {
        tipo_de_pessoa: 'Administrador',
      })
      .getMany();
    */

    const pessoas = await this.ormRepository.find({
      relations: ['tipo_de_pessoa'],
      where: [
        { tipo_de_pessoa: { id: '5fac1710-b184-4a2e-9abf-7b1cb241ebd3' } },
        { tipo_de_pessoa: { id: '8ba04ec1-f3b1-44b5-99ff-8cacb7a9cd0a' } },
        { tipo_de_pessoa: { id: 'a4f14714-06ed-4824-a7a7-0042f7b3ae6b' } },
      ],
    });

    return pessoas;
  }

  public async findByTypeESASearch(
    search: string,
  ): Promise<Pessoa[] | undefined> {
    const formattedQuery = search.trim().replace(/ /g, ' & ');

    console.log(formattedQuery);

    const pessoa = await this.ormRepository
      .createQueryBuilder('pessoas')
      .innerJoinAndSelect('pessoas.tipo_de_pessoa', 'tipos_de_pessoas')
      .where([
        { tipo_de_pessoa: { id: '5fac1710-b184-4a2e-9abf-7b1cb241ebd3' } },
        { tipo_de_pessoa: { id: '8ba04ec1-f3b1-44b5-99ff-8cacb7a9cd0a' } },
        { tipo_de_pessoa: { id: 'a4f14714-06ed-4824-a7a7-0042f7b3ae6b' } },
      ])
      .andWhere(
        new Brackets(qb => {
          qb.where(
            `to_tsvector('simple', pessoas.nome) @@ to_tsquery('simple', :query)`,
            { query: `${formattedQuery}:*` },
          );
          /*
            .orWhere(
              `to_tsvector('simple', pessoas.rg) @@ to_tsquery('simple', :query)`,
              { query: `${formattedQuery}:*` },
            )
            .orWhere(
              `to_tsvector('simple', pessoas.cpf) @@ to_tsquery('simple', :query)`,
              { query: `${formattedQuery}:*` },
            );

            .orWhere(
              `to_tsvector('simple', pessoas.email) @@ to_tsquery('simple', :query)`,
              { query: `${formattedQuery}:*` },
            );
            */
        }),
      )
      .getMany();

    return pessoa;
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

  public async save(dataPessoa: Pessoa): Promise<Pessoa> {
    const savePessoa = await this.ormRepository.save(dataPessoa);

    return savePessoa;
  }

  public async delete(id: string): Promise<string> {
    await this.ormRepository.delete(id);

    return 'Person deleted with succefully';
  }
}

export default PessoaRepository;
