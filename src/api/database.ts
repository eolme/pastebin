import 'reflect-metadata';

import { createConnection } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { default as driver } from 'better-sqlite3';
import { resolve } from 'path';
import { nanoid } from 'nanoid';

import * as entities from '#/api/entities';

export const options = {
  name: nanoid(32),
  type: 'better-sqlite3',
  driver,
  database: resolve('./runtime/database.sqlite'),
  synchronize: process.env.NODE_ENV === 'development',
  entities: Object.values(entities),
  namingStrategy: new SnakeNamingStrategy()
} as const;

export const connect = createConnection(options);
