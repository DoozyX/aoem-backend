import { MigrationInterface, QueryRunner } from "typeorm";

export class Buffs1738677381945 implements MigrationInterface {
    name = 'Buffs1738677381945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "buff" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "guildId" integer NOT NULL, "type" character varying NOT NULL, "member" character varying NOT NULL, CONSTRAINT "PK_67d070a141ee65f5c8ed5526435" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b07eb325ed9d16b013b3671945" ON "buff" ("guildId") `);
        await queryRunner.query(`ALTER TABLE "buff" ADD CONSTRAINT "FK_b07eb325ed9d16b013b36719456" FOREIGN KEY ("guildId") REFERENCES "guild"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buff" DROP CONSTRAINT "FK_b07eb325ed9d16b013b36719456"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b07eb325ed9d16b013b3671945"`);
        await queryRunner.query(`DROP TABLE "buff"`);
    }

}
