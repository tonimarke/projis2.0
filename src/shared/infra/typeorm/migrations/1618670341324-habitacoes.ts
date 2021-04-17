import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class habitacoes1618670341324 implements MigrationInterface {
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
            isNullable: false,
          },
          {
            name: 'valor_aluguel',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'quantidade_dormitorios',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'quantidade_salas',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'quantidade_copas',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'quantidade_cozinhas',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'quantidade_areas_servico',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'quantidade_garagens',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'pintura',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'piso',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'contra_piso',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'laje',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'forro_madeira',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'sem_forro',
            type: 'integer',
            isNullable: false,
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
