import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from 'customers/customers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_URL,
      port: 5432,
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      entities: [process.env.TYPEORM_ENTITIES_DIR],
      migrations: [process.env.TYPEORM_MIGRATIONS_DIR],
      migrationsRun: true,
      logging: true,
      logger: 'advanced-console',
      synchronize: true,
    }),
    CustomersModule,
  ],
})
export class AppModule {}
