import Database from 'better-sqlite3';
import * as schema from '../schema/schema';

export type DrizzleDB = Database<typeof schema>;
