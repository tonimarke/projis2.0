import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createCliente1614261799154 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clientes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
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
            name: 'ocupacao',
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
          {
            name: 'estado_civil',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'endereco',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'telefone',
            type: 'varchar',
            isNullable: true,
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
            name: 'fk_cliente_estado_civil',
            columnNames: ['estado_civil'],
            referencedColumnNames: ['id'],
            referencedTableName: 'estados_civis',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_cliente_endereco',
            columnNames: ['endereco'],
            referencedColumnNames: ['id'],
            referencedTableName: 'enderecos',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_cliente_telefone',
            columnNames: ['telefone'],
            referencedColumnNames: ['id'],
            referencedTableName: 'telefones',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('clientes', 'fk_cliente_telefone');
    await queryRunner.dropForeignKey('clientes', 'fk_cliente_endereco');
    await queryRunner.dropForeignKey('clientes', 'fk_cliente_estado_civil');
    await queryRunner.dropTable('clientes');
  }
}
