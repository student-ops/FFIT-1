import { Article, User } from '@/types';
import * as mysql2 from 'mysql2';

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function main() {
    const connection = mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'rooot',
        database: 'f_fit1'
    })

    for (let i = 3; i < 100; i++) {
        connection.query(
            'INSERT INTO `User` (`id` , `name`) VALUES (? , ?)',
            [`${i}`, `test${i}`],
            function (err, results, fields) {
                console.log(err);
                console.log(results);
                console.log(fields);
            }
        );
    }
    await sleep(1000);
    connection.query(
        'SELECT * FROM `User`',
        function (err, results, fields) {
            console.log(err);
            console.log(results);
            console.log(fields);
        }
    );
    connection.end();
}

main();