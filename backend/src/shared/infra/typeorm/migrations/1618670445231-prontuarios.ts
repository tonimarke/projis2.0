import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class prontuarios1618670445231 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'prontuarios',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          {
            name: 'motivo_procura',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'dec_hipo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'data_abertura',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'data_encerramento',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'telefone',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'gasto_familiar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'status_habitacao',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'status_saude',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'valor_bens_imoveis',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'valor_bens_moveis',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'sinotico',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'acao_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'estagiario_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'encaminhado_por_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'entrevistado_por_id',
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
            name: 'fk_prontuarios_acao',
            columnNames: ['acao_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'acoes',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_prontuarios_estagiario',
            columnNames: ['estagiario_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pessoas',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_prontuarios_encaminhado',
            columnNames: ['encaminhado_por_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pessoas',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_prontuarios_entrevistado',
            columnNames: ['entrevistado_por_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pessoas',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('prontuarios');
  }
}
