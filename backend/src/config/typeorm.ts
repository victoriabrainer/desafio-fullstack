import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const typeormConfig = {
  type: 'postgres',
  url: 'postgresql://postgres.yrlgubthipgwhcvecygp:Bra1ner@$1576@aws-0-sa-east-1.pooler.supabase.com:6543/postgres',
  entities: ['dist/cars/entities/*.{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('typeorm', () => typeormConfig);
export const connectionSource = new DataSource(
  typeormConfig as DataSourceOptions,
);
