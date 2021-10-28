import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import EstadoCivil from '../../../../modules/estado-civil/infra/typeorm/entities/EstadoCivil';

export default class EstadoCivilSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(EstadoCivil)
      .values([
        {
          estado_civil: 'Solteiro(a)',
        },
        {
          estado_civil: 'Casado(a)',
        },
        {
          estado_civil: 'Separado(a)',
        },
        {
          estado_civil: 'Divorciado(a)',
        },
        {
          estado_civil: 'Viúvo(a)',
        },
      ])
      .execute();
  }
}
