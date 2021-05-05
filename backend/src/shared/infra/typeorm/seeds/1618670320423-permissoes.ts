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
          nome: 'Cadastrar estado civil',
          descricao: 'Administrador pode cadastrar estado civil',
        },
        {
          nome: 'Alterar estado civil',
          descricao: 'Administrador pode alterar estado civil',
        },
        {
          nome: 'Consultar estado civil',
          descricao: 'Administrador pode consultar estado civil',
        },
        {
          nome: 'Deletar estado civil',
          descricao: 'Administrador pode deletar estado civil',
        },
      ])
      .execute();
  }
}
