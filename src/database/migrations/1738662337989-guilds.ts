import { MigrationInterface, QueryRunner } from "typeorm";

export class Guilds1738662337989 implements MigrationInterface {
    name = 'Guilds1738662337989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "guild" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_cfbbd0a2805cab7053b516068a3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "guild"`);
    }

}
