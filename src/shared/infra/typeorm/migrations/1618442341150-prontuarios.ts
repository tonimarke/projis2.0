import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class prontuarios1618442341150 implements MigrationInterface {
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
            name: 'orcamento_familiar_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'habitacao_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'declaracao_saude_id',
            type: 'uuid',
            isNullable: true,
          },
          /*
          {
            name: 'bens_imoveis_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'bens_moveis_id',
            type: 'uuid',
            isNullable: true,
          },
          */
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
          {
            name: 'fk_prontuarios_orcamento_familiar',
            columnNames: ['orcamento_familiar_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'orcamentos_familiares',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_prontuarios_habitacao',
            columnNames: ['habitacao_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'habitacoes',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_prontuarios_declaracao_saude',
            columnNames: ['declaracao_saude_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'saudes',
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
