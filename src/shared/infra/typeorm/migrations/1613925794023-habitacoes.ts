import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class habitacoes1613925794023 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'habitacoes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          {
            name: 'situacao',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'valor_aluguel',
            type: 'decimal(12,2)',
            isNullable: true,
          },
          {
            name: 'quantidade_dormitorios',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'quantidade_salas',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'quantidade_copas',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'quantidade_cozinhas',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'quantidade_areas_servico',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'quantidade_garagens',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'pintura',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'piso',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'contra_piso',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'laje',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'forro_madeira',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'sem_forro',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('habitacoes');
  }
}
