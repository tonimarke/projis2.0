import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import TipoDePessoa from '../../../../modules/tipo-de-pessoa/infra/typeorm/entities/TipoDePessoa';

export default class Tipo_De_Pessoa implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(TipoDePessoa)
      .values([
        {
          tipo_de_pessoa: '',
          permissoes: [],
        },
      ])
      .execute();
  }
}
