import { MigrationInterface, QueryRunner } from "typeorm";

export class Channel1738671938508 implements MigrationInterface {
    name = 'Channel1738671938508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "channel" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "uid" character varying NOT NULL, "guildId" integer NOT NULL, "type" character varying NOT NULL, CONSTRAINT "UQ_9a0cb0bae2a8e124e8459cb57b1" UNIQUE ("uid"), CONSTRAINT "UQ_guildId_type" UNIQUE ("guildId", "type"), CONSTRAINT "PK_590f33ee6ee7d76437acf362e39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_58d968d578e6279e2cc884db40" ON "channel" ("guildId") `);
        await queryRunner.query(`ALTER TABLE "channel" ADD CONSTRAINT "FK_58d968d578e6279e2cc884db403" FOREIGN KEY ("guildId") REFERENCES "guild"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "channel" DROP CONSTRAINT "FK_58d968d578e6279e2cc884db403"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_58d968d578e6279e2cc884db40"`);
        await queryRunner.query(`DROP TABLE "channel"`);
    }

}
