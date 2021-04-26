import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class acoesTipos1618670434970 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'acoes_tipos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          {
            name: 'acao_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'tipo_id',
            type: 'uuid',
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
        foreignKeys: [
          {
            name: 'fk_acao_tipo_acao',
            columnNames: ['acao_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'acoes',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_tipo_acao_tipo',
            columnNames: ['tipo_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tipos_acoes',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('acoes_tipos');
  }
}
