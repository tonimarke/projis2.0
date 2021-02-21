import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class saudes1613949709010 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name:'saudes',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'interdidato',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'curador/tutor',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'medicamentos',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'redePublica',
                    type: 'varchar',
                    isNullable: true,      
                },
                {
                    name: 'observações',
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
        await queryRunner.dropTable('saudes')
    }

}
