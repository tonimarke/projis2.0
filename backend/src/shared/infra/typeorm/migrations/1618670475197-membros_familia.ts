import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class membrosFamilia1618670475197 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'membros_familia',
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
            name: 'data_nascimento',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'parentesco',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'num_filhos',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'escolaridade',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'ocupacao',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'local_trabalho',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'salario',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'observacao',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'estado_civil_id',
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
            name: 'fk_membro_familia_estado_civeil',
            columnNames: ['estado_civil_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'estados_civis',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('membros_familia');
  }
}
