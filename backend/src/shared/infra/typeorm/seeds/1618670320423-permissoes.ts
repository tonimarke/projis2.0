import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import Permissao from '../../../../modules/permissao/infra/typeorm/entities/Permissao';

export default class Permissaoes implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Permissao)
      .values([
        {
          nome: 'Criar estado civil',
        },
        {
          nome: 'Alterar estado civil',
        },
        {
          nome: 'Consultar estado civil',
        },
        {
          nome: 'Deletar estado civil',
        },
      ])
      .execute();
  }
}
