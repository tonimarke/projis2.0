import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class bensImoveis1618670455314 implements MigrationInterface {
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
            name: 'valor',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'quantidade',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'tipo_bem_imovel_id',
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
            name: 'fk_bens_imovel_tipo_bem_imovel',
            columnNames: ['tipo_bem_imovel_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tipos_bens_imoveis',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_bens_imovel_prontuario',
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
    await queryRunner.dropTable('bens_imoveis');
  }
}
