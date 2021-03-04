import {MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class acoes1614736385097 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name:'acoes',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'providencias',
                    type: 'varchar',
                    isNullable: true,
                },
                
                {
                    name: 'data_atendimento',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()'
                },
                {
                    name: 'cliente_id',
                    type: 'uuid',
                    isNullable: false,
                },
                {
                    name: 'parte_contraria_id',
                    type: 'uuid',
                    isNullable: false,
                },
                {
                    name: 'tipo_id',
                    type: 'uuid',
                    isNullable: false,
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
                    name: 'fk_acao_tipo_acao',
                    columnNames: ['tipo_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'tipos_acoes',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    name: 'fk_acao_cliente',
                    columnNames: ['cliente_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'pessoas',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    name: 'fk_acao_parte_contraria',
                    columnNames: ['parte_contraria_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'pessoas',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('acoes', 'fk_acao_tipo_acao')
        await queryRunner.dropForeignKey('acoes', 'fk_acao_cliente')
        await queryRunner.dropForeignKey('acoes', 'fk_acao_parte_contraria')
        await queryRunner.dropTable('acoes')
    }
}
