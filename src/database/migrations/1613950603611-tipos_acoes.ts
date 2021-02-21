import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class tiposAcoes1613950603611 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name:'tipos_acoes',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'tipo_acao',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'descricao',
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
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tipos_bens_imoveis')
    }
}
