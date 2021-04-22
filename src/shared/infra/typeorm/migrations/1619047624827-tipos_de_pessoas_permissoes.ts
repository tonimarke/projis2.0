import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class tiposDePessoasPermissoes1619047624827
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tipos_de_pessoas_ permissoes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          {
            name: 'permissao_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'tipo_de_pessoa_id',
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
            name: 'fk_permissao_tipos_de_pessoas',
            columnNames: ['permissao_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'permissoes',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_tipo_de_pessoa_tipos_de_pessoas',
            columnNames: ['tipo_de_pessoa_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tipos_de_pessoas',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tipos_de_pessoas_ permissoes');
  }
}
