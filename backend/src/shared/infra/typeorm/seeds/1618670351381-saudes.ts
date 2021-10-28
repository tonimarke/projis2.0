import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import Saude from '../../../../modules/saude/infra/typeorm/entities/Saude';

export default class SaudeSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Saude)
      .values([
        {
          interditado: 'interditado-1',
          curador_tutor: 'curador_tutor-1',
          medicamentos: 'medicamentos-1',
          rede_publica: 'rede_publica-1',
          observacoes: 'observacoes-1',
        },
        {
          interditado: 'interditado-2',
          curador_tutor: 'curador_tutor-2',
          medicamentos: 'medicamentos-2',
          rede_publica: 'rede_publica-2',
          observacoes: 'observacoes-2',
        },
        {
          interditado: 'interditado-3',
          curador_tutor: 'curador_tutor-3',
          medicamentos: 'medicamentos-3',
          rede_publica: 'rede_publica-3',
          observacoes: 'observacoes-3',
        },
        {
          interditado: 'interditado-4',
          curador_tutor: 'curador_tutor-4',
          medicamentos: 'medicamentos-4',
          rede_publica: 'rede_publica-4',
          observacoes: 'observacoes-4',
        },
        {
          interditado: 'interditado-5',
          curador_tutor: 'curador_tutor-5',
          medicamentos: 'medicamentos-5',
          rede_publica: 'rede_publica-5',
          observacoes: 'observacoes-5',
        },
        {
          interditado: 'interditado-6',
          curador_tutor: 'curador_tutor-6',
          medicamentos: 'medicamentos-6',
          rede_publica: 'rede_publica-6',
          observacoes: 'observacoes-6',
        },
        {
          interditado: 'interditado-7',
          curador_tutor: 'curador_tutor-7',
          medicamentos: 'medicamentos-7',
          rede_publica: 'rede_publica-7',
          observacoes: 'observacoes-7',
        },
        {
          interditado: 'interditado-8',
          curador_tutor: 'curador_tutor-8',
          medicamentos: 'medicamentos-8',
          rede_publica: 'rede_publica-8',
          observacoes: 'observacoes-8',
        },
        {
          interditado: 'interditado-9',
          curador_tutor: 'curador_tutor-9',
          medicamentos: 'medicamentos-9',
          rede_publica: 'rede_publica-9',
          observacoes: 'observacoes-9',
        },
        {
          interditado: 'interditado-10',
          curador_tutor: 'curador_tutor-10',
          medicamentos: 'medicamentos-10',
          rede_publica: 'rede_publica-10',
          observacoes: 'observacoes-10',
        },
      ])
      .execute();
  }
}
