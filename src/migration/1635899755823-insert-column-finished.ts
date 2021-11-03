import {MigrationInterface, QueryRunner} from "typeorm";

export class insertColumnFinished1635899755823 implements MigrationInterface {
    name = 'insertColumnFinished1635899755823'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`read\` ADD \`finished\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`read\` DROP COLUMN \`finished\``);
    }

}
