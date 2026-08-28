import {integer,sqliteTable,text} from 'drizzle-orm/sqlite-core';
export const releases=sqliteTable('releases',{id:text('id').primaryKey(),product:text('product').notNull(),version:text('version').notNull(),filename:text('filename').notNull(),objectKey:text('object_key').notNull(),contentType:text('content_type').notNull(),size:integer('size').notNull(),createdAt:text('created_at').notNull()});
