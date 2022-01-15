const mysql = require('mysql2');

// 1.创建连接池
const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'amoshub',
  user: 'root',
  password: 'cooder8888.',
  connectionLimit: 10
});

// 2.使用连接池
const statement = `
  SELECT * FROM products WHERE price > ? AND score > ?;
`
connections.promise().execute(statement, [6000, 7]).then(([results]) => {
  console.log(results);
}).catch(err => {
  console.log(err);
});

