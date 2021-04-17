import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class prontuariosSupervisores1618662848982
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'prontuarios_supervisores',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          {
            name: 'supervisor_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'prontuario_id',
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
            name: 'fk_prontuario_supervisor_pessoa',
            columnNames: ['supervisor_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pessoas',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_prontuario_supervisor_prontuario',
            columnNames: ['prontuario_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'prontuarios',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('prontuarios_supervisores');
  }
}
