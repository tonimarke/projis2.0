import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class estagiariosSupervisores1617664439740
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'estagiarios_supervisores',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          {
            name: 'estagiario_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'supervisor_id',
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
            name: 'fk_estagiario_pessoa',
            columnNames: ['estagiario_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pessoas',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_supervisor_pessoa',
            columnNames: ['supervisor_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pessoas',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('estagiarios_supervisores');
  }
}
