import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class bensMoveis1618670465784 implements MigrationInterface {
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
            name: 'tipo_bem_movel_id',
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
            name: 'fk_bens_imovel_tipos_bens_moveis',
            columnNames: ['tipo_bem_movel_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tipos_bens_moveis',
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
    await queryRunner.dropTable('bens_moveis');
  }
}
