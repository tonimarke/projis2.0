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
            name: 'tipo_id',
            type: 'uuid',
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
            name: 'fk_bem_imovel_tipo_id',
            columnNames: ['tipo_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tipos_bens_imoveis',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'bens_imoveis',
      'fk_bem_imovel_tipo_bem_imovel',
    );
    await queryRunner.dropTable('bens_imoveis');
  }
}
