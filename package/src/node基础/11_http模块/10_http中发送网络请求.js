const http = require('http');
/**
 * http模块既可以创建服务
 * 也可以发送请求
 * axios库中封装了两种发送请求的方式
 * 一种是 ajax
 * 一种是 http
 * axios 在node中使用时，就是使用的http模块
 * 
 * 
*/
// http发送get请求
// http.get('http://localhost:8888', (res) => {
//   res.on('data', (data) => {
//     console.log(data.toString());
//   });

//   res.on('end', () => {
//     console.log("获取到了所有的结果");
//   })
// })

// http发送post请求
const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8888
}, (res) => {
  res.on('data', (data) => {
    console.log(data.toString());
  });
  // post 请求必须监听结束事件
  res.on('end', () => {
    console.log("获取到了所有的结果");
  })
});

req.end();
