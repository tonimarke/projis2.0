import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class pessoas1618670392297 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pessoas',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          // Pessoas
          {
            name: 'nome',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'rg',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cpf',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
            isNullable: true,
          },
          // Cliente
          {
            name: 'nome_pai',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nome_mae',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'data_nascimento',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'religiao',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'previdencia_social',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'bpc',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'sindicalizado',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'situacao',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'observacoes',
            type: 'varchar',
            isNullable: true,
          },
          // Estagiário
          // data_nascimento
          {
            name: 'inicio_vinculo',
            type: 'timestamp',
            isNullable: true,
            default: 'now()',
          },
          {
            name: 'termino_vinculo',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'curso',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'periodo',
            type: 'varchar',
            isNullable: true,
          },
          // Supervisor
          {
            name: 'profissao',
            type: 'varchar',
            isNullable: true,
          },
          // Advogado
          {
            name: 'oab',
            type: 'varchar',
            isNullable: true,
          },
          // Parte contrária
          // Endereco_id
          {
            name: 'ocupacao',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'estado_civil_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'endereco_id',
            type: 'uuid',
            isNullable: true,
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
            name: 'fk_pessoa_estado_civil',
            columnNames: ['estado_civil_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'estados_civis',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_pessoa_endereco',
            columnNames: ['endereco_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'enderecos',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_pesssoa_tipo_de_pessoa',
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
    await queryRunner.dropTable('pessoas');
  }
}
