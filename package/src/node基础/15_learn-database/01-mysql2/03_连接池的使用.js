const mysql = require('mysql2');

// 1.创建连接池
const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'amoshub',
  user: 'root',
  password: 'coder8888.',
  // 设置连接池限制
  connectionLimit: 10
});

// 2.使用连接池
const statement = `
  SELECT * FROM products WHERE price > ? AND score > ?;
`
connections.execute(statement, [6000, 7], (err, results) => {
  console.log(results);
});

