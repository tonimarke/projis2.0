import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createBensMoveis1614361720931
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'bens_moveis',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'tipo_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'valor',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'quantidade',
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
        foreignKeys: [
          {
            name: 'fk_bem_movel_tipo_bem_movel',
            columnNames: ['tipo_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tipos_bens_moveis',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'bens_moveis',
      'fk_bem_movel_tipo_bem_movel',
    );
    await queryRunner.dropTable('bens_moveis');
  }
}
