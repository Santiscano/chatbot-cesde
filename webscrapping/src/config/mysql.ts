import * as mysql from "mysql2/promise";


// @ts-ignore
export const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'cesdeBot',
    port: 3307,
});