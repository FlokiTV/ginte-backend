import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('users', {
  id: integer(),
});
