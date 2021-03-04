import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class prontuarios1614738245603 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name:'prontuarios',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'acao_id',
                    type: 'uuid',
                    isNullable: false,
                },
                
                {
                    name: 'data_atendimento',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()'
                },
                {
                    name: 'data_encerramento',
                    type: 'timestamp',
                    isNullable: true,
                    default: 'now()'
                },
                {
                    name: 'motivo_procura',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'saude_id',
                    type: 'uuid',
                    isNullable: true,
                },
                {
                    name: 'encaminhado_por_id',
                    type: 'uuid',
                    isNullable: true,
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
                    name: 'dec_hipo',
                    type: 'varchar',
                    isNullable: true,
                },
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
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ],
            foreignKeys: [
                {
                    name: 'fk_prontuario_acao',
                    columnNames: ['acao_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'acoes',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    name: 'fk_prontuario_saude',
                    columnNames: ['saude_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'saudes',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    name: 'fk_prontuario_encaminhado_por',
                    columnNames: ['encaminhado_por_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'pessoas',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    name: 'fk_prontuario_entrevistado_por',
                    columnNames: ['entrevistado_por_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'pessoas',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    name: 'fk_prontuario_orcamento_familiar',
                    columnNames: ['orcamento_familiar_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'orcamentos_familiares',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    name: 'fk_prontuario_habitacao',
                    columnNames: ['habitacao_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'habitacoes',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    name: 'fk_prontuario_bens_imoveis',
                    columnNames: ['bens_imoveis_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'bens_imoveis',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    name: 'fk_prontuario_bens_moveis',
                    columnNames: ['bens_moveis_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'bens_moveis',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('prontuarios', 'fk_prontuario_acao')
        await queryRunner.dropForeignKey('prontuarios', 'fk_prontuario_saude')
        await queryRunner.dropForeignKey('prontuarios', 'fk_prontuario_encaminhado_por')
        await queryRunner.dropForeignKey('prontuarios', 'fk_prontuario_entrevistado_por')
        await queryRunner.dropForeignKey('prontuarios', 'fk_prontuario_orcamento_familiar')
        await queryRunner.dropForeignKey('prontuarios', 'fk_prontuario_habitacao')
        await queryRunner.dropForeignKey('prontuarios', 'fk_prontuario_bens_imoveis')
        await queryRunner.dropForeignKey('prontuarios', 'fk_prontuario_bens_moveis')

        await queryRunner.dropTable('prontuarios')
    }
}
