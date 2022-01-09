const Koa = require('koa');
const axios = require('axios');

const app = new Koa();
// next 函数是一个Promise
const middleware1 = async (ctx, next) => {
  ctx.message = "aaa";
  await next();
  next();
  ctx.body = ctx.message;
}

const middleware2 = async (ctx, next) => {
  ctx.message += "bbb";
  await next();
}

const middleware3 = async (ctx, next) => {
  // 这里的异步操作会影响前面的中间件
  const result = await axios.get('http://123.207.32.32:9001/lyric?id=167876');
  ctx.message += result.data.lrc.lyric;
}

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

app.listen(8000, () => {
  console.log("服务器启动成功~");
})