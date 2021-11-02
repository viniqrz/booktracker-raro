import {MigrationInterface, QueryRunner} from "typeorm";

export class updateCommentConstraint1635839760342 implements MigrationInterface {
    name = 'updateCommentConstraint1635839760342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`session\` DROP FOREIGN KEY \`FK_0ed3364fa1bfc14abb27bd8e13a\``);
        await queryRunner.query(`ALTER TABLE \`session\` DROP COLUMN \`commentsId\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`session\` ADD \`commentsId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`session\` ADD CONSTRAINT \`FK_0ed3364fa1bfc14abb27bd8e13a\` FOREIGN KEY (\`commentsId\`) REFERENCES \`comment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
