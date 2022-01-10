const express = require('express');
const axios = require('axios');

const app = express();
// express 的next 是一个同步函数
// 加不加async 其实没有影响 解决不了根本问题
const middleware1 = async (req, res, next) => {
  req.message = "aaa";
  await next();
  res.end(req.message);
}

const middleware2 = async (req, res, next) => {
  req.message += "bbb";
  await next();
}

const middleware3 = async (req, res, next) => {
  const result = await axios.get('http://123.207.32.32:9001/lyric?id=167876');
  req.message += result.data.lrc.lyric;
}

app.use(middleware1, middleware2, middleware3);

app.listen(8000, () => {
  console.log("服务器启动成功~");
})