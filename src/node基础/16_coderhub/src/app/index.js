const Koa = require("koa")

const app = new Koa();
app.use((ctx, next) => {
  ctx.response.body = "Hello World";
});

// 注册路由
app.use()
module.exports = app