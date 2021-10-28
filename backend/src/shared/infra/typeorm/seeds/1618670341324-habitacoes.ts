import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import Habitacao from '../../../../modules/habitacao/infra/typeorm/entities/Habitacao';

export default class HabitacaoSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Habitacao)
      .values([
        {
          situacao: 'situacao-1',
          valor_aluguel: 21,
          quantidade_dormitorios: 2,
          quantidade_salas: 2,
          quantidade_copas: 4,
          quantidade_cozinhas: 7,
          quantidade_areas_servico: 4,
          quantidade_garagens: 6,
          pintura: 'pintura-1',
          piso: 'piso-1',
          contra_piso: 2,
          laje: 7,
          forro_madeira: 9,
          sem_forro: 3,
        },
        {
          situacao: 'situacao-2',
          valor_aluguel: 2.1,
          quantidade_dormitorios: 2,
          quantidade_salas: 2,
          quantidade_copas: 2,
          quantidade_cozinhas: 4,
          quantidade_areas_servico: 6,
          quantidade_garagens: 2,
          pintura: 'pintura-2',
          piso: 'piso-2',
          contra_piso: 3,
          laje: 4,
          forro_madeira: 6,
          sem_forro: 5,
        },
        {
          situacao: 'situacao-3',
          valor_aluguel: 32.42,
          quantidade_dormitorios: 2,
          quantidade_salas: 3,
          quantidade_copas: 2,
          quantidade_cozinhas: 2,
          quantidade_areas_servico: 6,
          quantidade_garagens: 4,
          pintura: 'pintura-3',
          piso: 'piso-3',
          contra_piso: 2,
          laje: 32,
          forro_madeira: 43,
          sem_forro: 43,
        },
        {
          situacao: 'situacao-4',
          valor_aluguel: 4.2,
          quantidade_dormitorios: 4,
          quantidade_salas: 4,
          quantidade_copas: 3,
          quantidade_cozinhas: 3,
          quantidade_areas_servico: 2,
          quantidade_garagens: 4,
          pintura: 'pintura-4',
          piso: 'piso-4',
          contra_piso: 2,
          laje: 2,
          forro_madeira: 4,
          sem_forro: 4,
        },
        {
          situacao: 'situaca-5',
          valor_aluguel: 43.2,
          quantidade_dormitorios: 2,
          quantidade_salas: 86,
          quantidade_copas: 4,
          quantidade_cozinhas: 5,
          quantidade_areas_servico: 6,
          quantidade_garagens: 4,
          pintura: 'pintura-5',
          piso: 'piso-5',
          contra_piso: 5,
          laje: 4,
          forro_madeira: 4,
          sem_forro: 7,
        },
        {
          situacao: 'situacao-6',
          valor_aluguel: 2,
          quantidade_dormitorios: 7,
          quantidade_salas: 5,
          quantidade_copas: 2,
          quantidade_cozinhas: 4,
          quantidade_areas_servico: 7,
          quantidade_garagens: 3,
          pintura: 'pintura-6',
          piso: 'piso-6',
          contra_piso: 5,
          laje: 3,
          forro_madeira: 9,
          sem_forro: 4,
        },
        {
          situacao: 'situacao-7',
          valor_aluguel: 43.32,
          quantidade_dormitorios: 7,
          quantidade_salas: 2,
          quantidade_copas: 5,
          quantidade_cozinhas: 4,
          quantidade_areas_servico: 5,
          quantidade_garagens: 7,
          pintura: 'pintura-7',
          piso: 'piso-7',
          contra_piso: 3,
          laje: 4,
          forro_madeira: 2,
          sem_forro: 7,
        },
        {
          situacao: 'situacao-8',
          valor_aluguel: 23.12,
          quantidade_dormitorios: 2,
          quantidade_salas: 5,
          quantidade_copas: 9,
          quantidade_cozinhas: 5,
          quantidade_areas_servico: 5,
          quantidade_garagens: 3,
          pintura: 'pintura-9',
          piso: 'piso-8',
          contra_piso: 2,
          laje: 5,
          forro_madeira: 8,
          sem_forro: 2,
        },
        {
          situacao: 'situacao-9',
          valor_aluguel: 4,
          quantidade_dormitorios: 2,
          quantidade_salas: 4,
          quantidade_copas: 7,
          quantidade_cozinhas: 2,
          quantidade_areas_servico: 3,
          quantidade_garagens: 5,
          pintura: 'pintura-9',
          piso: 'piso-9',
          contra_piso: 2,
          laje: 4,
          forro_madeira: 7,
          sem_forro: 5,
        },
        {
          situacao: 'situacao-10',
          valor_aluguel: 2,
          quantidade_dormitorios: 4,
          quantidade_salas: 4,
          quantidade_copas: 2,
          quantidade_cozinhas: 2,
          quantidade_areas_servico: 5,
          quantidade_garagens: 3,
          pintura: 'pintura-10',
          piso: 'piso-10',
          contra_piso: 2,
          laje: 3,
          forro_madeira: 5,
          sem_forro: 6,
        },
      ])
      .execute();
  }
}
