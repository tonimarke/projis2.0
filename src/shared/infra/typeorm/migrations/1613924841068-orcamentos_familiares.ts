import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class orcamentosFamiliares1613924841068
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orcamentos_familiares',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          {
            name: 'alimentacao',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'transporte',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'agua',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'luz',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'telefone',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'internet',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'aluguel',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'convenio_medico',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'medicamentos',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'educacao',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'higiene',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'financiamento',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'outros',
            type: 'decimal',
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
    await queryRunner.dropTable('orcamentos_familiares');
  }
}
