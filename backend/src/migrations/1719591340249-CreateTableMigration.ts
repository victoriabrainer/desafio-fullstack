import { MigrationInterface, QueryRunner } from 'typeorm';
import { Stores } from '../cars/enums/stores.enum';
import { CarBrand } from '../cars/enums/brand.enum';

export class CreateTableMigration1719591340249 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TYPE "stores_enum" AS ENUM ('${Object.values(Stores).join("', '")}');
        CREATE TYPE "carbrand_enum" AS ENUM ('${Object.values(CarBrand).join("', '")}');
        CREATE TABLE "car" (
            "id" SERIAL PRIMARY KEY,
            "brand" "carbrand_enum" NOT NULL,
            "model" VARCHAR(50) NOT NULL,
            "year" VARCHAR(20) NOT NULL,
            "version" VARCHAR(255) NOT NULL,
            "km" VARCHAR(50),
            "store" "stores_enum" NOT NULL,
            "price" VARCHAR(50)
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "car"`);
    await queryRunner.query(`DROP TYPE "stores_enum"`);
    await queryRunner.query(`DROP TYPE "carbrand_enum"`);
  }
}
