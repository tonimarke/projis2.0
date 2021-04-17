import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class acoes1618670425733 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'acoes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          {
            name: 'providencias',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'data_atendimento',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'cliente_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'parte_contraria_id',
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
            name: 'fk_acao_cliente',
            columnNames: ['cliente_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pessoas',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_acao_parte_contraria',
            columnNames: ['parte_contraria_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pessoas',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('acoes');
  }
}
