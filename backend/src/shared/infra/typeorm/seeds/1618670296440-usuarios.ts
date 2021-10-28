import { hash } from 'bcryptjs';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import TipoDePessoa from '../../../../modules/tipo-de-pessoa/infra/typeorm/entities/TipoDePessoa';
import Permissao from '../../../../modules/permissao/infra/typeorm/entities/Permissao';
import Usuario from '../../../../modules/usuario/infra/typeorm/entities/Usuario';

export default class TipoDePessoaSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const tipoDePessoa = await connection
      .createQueryBuilder()
      .insert()
      .into(TipoDePessoa)
      .values([
        {
          tipo_de_pessoa: 'Administrador',
        },
        {
          tipo_de_pessoa: 'Supervisor',
        },
        {
          tipo_de_pessoa: 'Estagiário',
        },
        {
          tipo_de_pessoa: 'Cliente',
        },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Permissao)
      .values([
        {
          nome: 'permissao-1',
          descricao: 'descricao-1',
        },
        {
          nome: 'permissao-2',
          descricao: 'descricao-2',
        },
        {
          nome: 'permissao-3',
          descricao: 'descricao-3',
        },
        {
          nome: 'permissao-4',
          descricao: 'descricao-4',
        },
        {
          nome: 'permissao-5',
          descricao: 'descricao-5',
        },
        {
          nome: 'permissao-6',
          descricao: 'descricao-6',
        },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Usuario)
      .values([
        {
          nome: 'usuario-1',
          email: 'usuario@gmail.com',
          senha: await hash('123', 10),
          tipo_de_pessoa_id: tipoDePessoa.identifiers[0].id,
        },
      ])
      .execute();
  }
}
