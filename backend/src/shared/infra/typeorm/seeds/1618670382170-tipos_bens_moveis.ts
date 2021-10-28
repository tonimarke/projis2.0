import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import TipoBemMovel from '../../../../modules/tipo-bem-movel/infra/typeorm/entities/TipoBemMovel';

export default class TipoBemMovelSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(TipoBemMovel)
      .values([
        {
          nome: 'tipo-bem-movel-1',
        },
        {
          nome: 'tipo-bem-movel-2',
        },
        {
          nome: 'tipo-bem-movel-3',
        },
        {
          nome: 'tipo-bem-movel-4',
        },
        {
          nome: 'tipo-bem-movel-5',
        },
        {
          nome: 'tipo-bem-movel-6',
        },
        {
          nome: 'tipo-bem-movel-7',
        },
        {
          nome: 'tipo-bem-movel-8',
        },
        {
          nome: 'tipo-bem-movel-9',
        },
        {
          nome: 'tipo-bem-movel-10',
        },
      ])
      .execute();
  }
}
