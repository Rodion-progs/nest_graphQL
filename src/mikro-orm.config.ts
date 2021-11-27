import {Options} from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import * as path from 'path';
const config: Options = {
  type: 'postgresql',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '12345',
  dbName: 'nestjsgraphql',
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d*\.[tj]s$/
  }
};

export default config;
