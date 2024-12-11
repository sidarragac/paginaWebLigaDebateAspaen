import { DataSource, DataSourceOptions } from 'typeorm';
import { MYSQL_DB, MYSQL_HOST, MYSQL_PASS, MYSQL_PORT, MYSQL_USER } from '../constants';

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    username: MYSQL_USER,
    password: MYSQL_PASS,
    database: MYSQL_DB,
    synchronize: false,
    entities: ['src/**/*.entity.ts'],
    migrations: ['db/migrations/**/*.ts'],
}

const dataSource: DataSource = new DataSource(dataSourceOptions);
export default dataSource;