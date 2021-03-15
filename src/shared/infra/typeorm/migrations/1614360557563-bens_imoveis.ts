import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createBensImoveis1614360557563
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'bens_imoveis',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'quantidade',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'tipo_bem_imovel_id',
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
            name: 'fk_tipo_bem_imovel',
            referencedTableName: 'tipos_bens_imoveis',
            referencedColumnNames: ['id'],
            columnNames: ['tipo_bem_imovel_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('bens_imoveis');
  }
}
