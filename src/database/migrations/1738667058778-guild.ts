import { MigrationInterface, QueryRunner } from "typeorm";

export class Guild1738667058778 implements MigrationInterface {
    name = 'Guild1738667058778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "guild" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "uid" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_c39ab2de955a7a7e031698305e9" UNIQUE ("uid"), CONSTRAINT "PK_cfbbd0a2805cab7053b516068a3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "guild"`);
    }

}
