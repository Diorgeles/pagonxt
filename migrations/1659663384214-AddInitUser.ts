import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

export class AddInitialUser1587325359027 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // A ideia era fazer um modulo de login, mas não tive tempo
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
