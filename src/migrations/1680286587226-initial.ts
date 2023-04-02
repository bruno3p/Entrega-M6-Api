import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1680286587226 implements MigrationInterface {
    name = 'initial1680286587226'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(50) NOT NULL, "name" character varying(50) NOT NULL, "password" character varying(120) NOT NULL, "telefone" character varying(15) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_ce560737283930ec16034de9228" UNIQUE ("telefone"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(50), "name" character varying(50) NOT NULL, "telefone" character varying(15) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"), CONSTRAINT "UQ_dc4b6846a3b6dfdc0d23c7e3d98" UNIQUE ("telefone"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
