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
        { tipo_de_pessoa: { id: '02495f22-6d69-4ec1-8d6f-c4b11b1dd2ce' } },
        { tipo_de_pessoa: { id: '7ce92b7d-71c8-4ac0-a0cd-a9a3c24a3d6d' } },
        { tipo_de_pessoa: { id: '818c6262-c4e8-45ff-8303-7718a0231eee' } },
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
        { tipo_de_pessoa: { id: '02495f22-6d69-4ec1-8d6f-c4b11b1dd2ce' } },
        { tipo_de_pessoa: { id: '7ce92b7d-71c8-4ac0-a0cd-a9a3c24a3d6d' } },
        { tipo_de_pessoa: { id: '818c6262-c4e8-45ff-8303-7718a0231eee' } },
      ])
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
