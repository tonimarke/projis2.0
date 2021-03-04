import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class pessoas1614693642373 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'pessoas',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
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
                // Cliente
                {
                    name: 'estado_civil_id',
                    type: 'uuid',
                    isNullable: true,
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
                    name: 'data_nascimento',
                    type: 'timestamp',
                    isNullable: true,
                },
                {
                    name: 'endereco_id',
                    type: 'uuid',
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
                //data_nascimento
                {
                    name: 'inicio_vinculo',
                    type: 'timestamp',
                    isNullable: true,
                    default: 'now()'
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
                {
                    name: 'supervisor_id',
                    type: 'uuid',
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
                    name: 'fk_estagiario_supervisor',
                    columnNames: ['supervisor_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'pessoas',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ]
            
        }))
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pessoas', 'fk_pessoa_estado_civil')
        await queryRunner.dropForeignKey('pessoas', 'fk_pessoa_endereco')
        await queryRunner.dropForeignKey('pessoas', 'fk_estagiario_supervisor')
        await queryRunner.dropTable('pessoas')
    }

}