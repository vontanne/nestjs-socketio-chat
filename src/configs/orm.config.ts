import { DataSource } from 'typeorm';
import { resolve } from 'path';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: resolve('database/app.db'),
  entities: [resolve('dist/**/*.entity.js')],
  migrations: [resolve('dist/migrations/*.js')],
  synchronize: false,
  logging: true,
  migrationsRun: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
