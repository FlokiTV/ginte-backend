import * as t from 'drizzle-orm/sqlite-core';

export const clients = t.sqliteTable('clients', {
  id: t.int().primaryKey({ autoIncrement: true }),
  name: t.text('name'),
  email: t.text('email'),
  phone: t.text('phone'),
  date: t.text('date'),
  address: t.text('address'),
});
