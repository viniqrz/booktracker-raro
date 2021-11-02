import {MigrationInterface, QueryRunner} from "typeorm";

export class addBookDetails1635839506338 implements MigrationInterface {
    name = 'addBookDetails1635839506338'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`coverUrl\` varchar(500) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`author\` varchar(500) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`releaseYear\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`releaseYear\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`author\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`coverUrl\``);
    }

}
