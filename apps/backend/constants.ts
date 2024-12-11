import { config } from 'dotenv';

config();

export const MYSQL_HOST = process.env.MYSQL_HOST;
export const MYSQL_PORT = parseInt(process.env.MYSQL_PORT);
export const MYSQL_USER = process.env.MYSQL_USER;
export const MYSQL_PASS = process.env.MYSQL_PASS;
export const MYSQL_DB = process.env.MYSQL_DB;