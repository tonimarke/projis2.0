import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import TipoBemImovel from '../../../../modules/tipo-bem-imovel/infra/typeorm/entities/TipoBemImovel';

export default class TipoBemImovelSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(TipoBemImovel)
      .values([
        {
          nome: 'tipo-bem-imovel-1',
        },
        {
          nome: 'tipo-bem-imovel-2',
        },
        {
          nome: 'tipo-bem-imovel-3',
        },
        {
          nome: 'tipo-bem-imovel-4',
        },
        {
          nome: 'tipo-bem-imovel-5',
        },
        {
          nome: 'tipo-bem-imovel-6',
        },
        {
          nome: 'tipo-bem-imovel-7',
        },
        {
          nome: 'tipo-bem-imovel-8',
        },
        {
          nome: 'tipo-bem-imovel-9',
        },
        {
          nome: 'tipo-bem-imovel-10',
        },
      ])
      .execute();
  }
}
