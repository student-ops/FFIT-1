import { Article, User } from '@/types';
import * as mysql2 from 'mysql2';

export async function main() {
    const connection = mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'rooot',
        database: 'f_fit1'
    })
    const query_res = connection.query(
        'SELECT * FROM `User`',
        function (err, results, fields) {
            console.log(results);
            return results;
        }
    );
    console.log(query_res);
    connection.end();
}

main();