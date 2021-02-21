import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class orcamentosFamiliares1613924841068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orcamentos_familiares',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'alimentacao',
                    type: 'decimal(12,2)',
                    isNullable: true,
                },
                {
                    name: 'transporte',
                    type: 'decimal(12,2)',
                    isNullable: true,
                },
                {
                    name: 'agua',
                    type: 'decimal(12,2)',
                    isNullable: true,
                },
                {
                    name: 'luz',
                    type: 'decimal(12,2)',
                    isNullable: true,      
                },
                {
                    name: 'telefone',
                    type: 'decimal(12,2)',
                    isNullable: true,
                },
                {
                    name: 'internet',
                    type: 'decimal(12,2)',
                    isNullable: true,
                },
                {
                    name: 'aluguel',
                    type: 'decimal(12,2)',
                    isNullable: true,
                },
                {
                    name: 'convenio_medico',
                    type: 'decimal(12,2)',
                    isNullable: true,
                },
                {
                    name: 'medicamentos',
                    type: 'decimal(12,2)',
                    isNullable: true,
                },
                {
                    name: 'educacao',
                    type: 'decimal(12,2)',
                    isNullable: true,
                },
                {
                    name: 'higiene',
                    type: 'decimal(12,2)',
                    isNullable: true,
                },
                {
                    name: 'financiamento',
                    type: 'decimal(12,2)',
                    isNullable: true,
                },
                {
                    name: 'outros',
                    type: 'decimal(12,2)',
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
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orcamentos_familiares')
    }

}
