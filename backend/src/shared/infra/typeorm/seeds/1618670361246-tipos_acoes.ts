import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import TipoAcao from '../../../../modules/tipo-acao/infra/typeorm/entities/TipoAcao';

export default class TipoDeAcao implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(TipoAcao)
      .values([
        {
          nome: 'Adoção',
          descricao: 'Adoção',
        },
        {
          nome: 'Alvará',
          descricao: 'Alvará',
        },
        {
          nome: 'Cobrança',
          descricao: 'Cobrança',
        },
        {
          nome: 'Declaratória',
          descricao: 'Declaratória',
        },
        {
          nome: 'Ofício',
          descricao: 'Ofício',
        },
      ])
      .execute();
  }
}
