const fs = require('fs');
const sharp = require('sharp'); // 对图片进行裁剪的库

// 读取文本文件
// fs.readFile("./foo.txt", (err, data) => {
//   console.log(data);
//   console.log(data.toString());
// });

// 读取图片文件 二进制
// fs.readFile("./bar.png", (err, data) => {
//   console.log(data);
// 写入文件 
// 流程：先转为buffer 后用buffer转为图片
//   fs.writeFile("./foo.png", data, err => {
//     console.log(err);
//   });
// });

// sharp库的使用
// sharp('./bar.png')
//   .resize(200, 200)
//   .toFile('./baz.png');

sharp('./foo.png')
  .resize(300, 300)
  .toBuffer()
  .then(data => {
    fs.writeFile('./bax.png', data, err => console.log(err));
  })