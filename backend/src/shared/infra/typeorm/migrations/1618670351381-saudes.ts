import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class saudes1618670351381 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'saudes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          {
            name: 'interditado',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'curador_tutor',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'medicamentos',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'rede_publica',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'observacoes',
            type: 'varchar',
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
    await queryRunner.dropTable('saudes');
  }
}
