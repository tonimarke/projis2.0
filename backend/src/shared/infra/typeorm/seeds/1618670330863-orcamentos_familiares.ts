import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import OrcamentoFamiliar from '../../../../modules/orcamento-familiar/infra/typeorm/entities/OrcamentoFamiliar';

export default class TipoDePessoaSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(OrcamentoFamiliar)
      .values([
        {
          alimentacao: 23,
          transporte: 83.23,
          agua: 32.21,
          luz: 93.21,
          telefone: 3.21,
          internet: 213.21,
          aluguel: 32.65,
          convenio_medico: 87.75,
          medicamentos: 765.54,
          educacao: 63.65,
          higiene: 75.31,
          financiamento: 4.21,
          outros: 412.21,
        },
        {
          alimentacao: 31.32,
          transporte: 23.78,
          agua: 53.56,
          luz: 75.65,
          telefone: 86.32,
          internet: 99.53,
          aluguel: 85.22,
          convenio_medico: 42.33,
          medicamentos: 75.12,
          educacao: 94.12,
          higiene: 23.41,
          financiamento: 32.21,
          outros: 96.64,
        },
        {
          alimentacao: 20.53,
          transporte: 43.51,
          agua: 745.42,
          luz: 43.42,
          telefone: 35.75,
          internet: 97.53,
          aluguel: 67.21,
          convenio_medico: 46.35,
          medicamentos: 95.53,
          educacao: 7.54,
          higiene: 6.35,
          financiamento: 40.12,
          outros: 22.25,
        },
        {
          alimentacao: 42.43,
          transporte: 73.32,
          agua: 94.53,
          luz: 58.32,
          telefone: 73.85,
          internet: 74.12,
          aluguel: 52.32,
          convenio_medico: 20.41,
          medicamentos: 52.02,
          educacao: 24.2,
          higiene: 30.32,
          financiamento: 10.24,
          outros: 24.2,
        },
        {
          alimentacao: 20.21,
          transporte: 4.21,
          agua: 21.85,
          luz: 74.32,
          telefone: 30.53,
          internet: 52.23,
          aluguel: 52.75,
          convenio_medico: 30.32,
          medicamentos: 31.5,
          educacao: 30.53,
          higiene: 25.0,
          financiamento: 30.32,
          outros: 53.2,
        },
        {
          alimentacao: 3.4,
          transporte: 42.0,
          agua: 43.0,
          luz: 42.1,
          telefone: 43.0,
          internet: 40.86,
          aluguel: 60.72,
          convenio_medico: 40.52,
          medicamentos: 9.53,
          educacao: 12.42,
          higiene: 42.4,
          financiamento: 12.4,
          outros: 41.23,
        },
        {
          alimentacao: 30.43,
          transporte: 43.2,
          agua: 8.7,
          luz: 43.32,
          telefone: 13.3,
          internet: 3.3,
          aluguel: 53.2,
          convenio_medico: 58.34,
          medicamentos: 420.13,
          educacao: 35.32,
          higiene: 52.3,
          financiamento: 42.5,
          outros: 44.52,
        },
        {
          alimentacao: 42.32,
          transporte: 325.23,
          agua: 43.21,
          luz: 34.52,
          telefone: 35.64,
          internet: 64.35,
          aluguel: 52.8,
          convenio_medico: 64.64,
          medicamentos: 35.51,
          educacao: 53.23,
          higiene: 97.97,
          financiamento: 86.64,
          outros: 68.43,
        },
        {
          alimentacao: 3.12,
          transporte: 32.1,
          agua: 75.52,
          luz: 52.1,
          telefone: 22.43,
          internet: 64.12,
          aluguel: 41.46,
          convenio_medico: 5.21,
          medicamentos: 74.64,
          educacao: 63.36,
          higiene: 74.71,
          financiamento: 41.73,
          outros: 53.12,
        },
        {
          alimentacao: 2.21,
          transporte: 35.12,
          agua: 53.73,
          luz: 54.73,
          telefone: 52.74,
          internet: 84.47,
          aluguel: 72.42,
          convenio_medico: 36.72,
          medicamentos: 28.83,
          educacao: 46.72,
          higiene: 25.52,
          financiamento: 32.32,
          outros: 236.32,
        },
      ])
      .execute();
  }
}