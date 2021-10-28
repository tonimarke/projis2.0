import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import TipoAcao from '../../../../modules/tipo-acao/infra/typeorm/entities/TipoAcao';

export default class TipoAcaoSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(TipoAcao)
      .values([
        {
          nome: 'tipo-de-acao-1',
          descricao: 'descricao-1',
        },
        {
          nome: 'tipo-de-acao-2',
          descricao: 'descricao-2',
        },
        {
          nome: 'tipo-de-acao-3',
          descricao: 'descricao-3',
        },
        {
          nome: 'tipo-de-acao-4',
          descricao: 'descricao-4',
        },
        {
          nome: 'tipo-de-acao-5',
          descricao: 'descricao-5',
        },
        {
          nome: 'tipo-de-acao-6',
          descricao: 'descricao-6',
        },
        {
          nome: 'tipo-de-acao-7',
          descricao: 'descricao-7',
        },
        {
          nome: 'tipo-de-acao-8',
          descricao: 'descricao-8',
        },
        {
          nome: 'tipo-de-acao-9',
          descricao: 'descricao-9',
        },
        {
          nome: 'tipo-de-acao-10',
          descricao: 'descricao-10',
        },
      ])
      .execute();
  }
}
