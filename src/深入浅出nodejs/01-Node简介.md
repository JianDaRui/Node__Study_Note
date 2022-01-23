# 深入浅出Node.js——读书笔记
# 第一章 Node简介
## 1.1 node 诞生

node 诞生于09年3月份，距今已经有13年的历史。作者是Ryan Dahl

## 1.2 名字的由来和起源

- node英文含义本是节点的意思

为什么选择了javascript？

刚开始作者希望设计一种高性能的Web服务器，而高性能Web服务器的主要特点就是：事件驱动、非阻塞I/O。

> 什么是事件驱动、非阻塞I/O后面补充

创建Node的时候，作者对比了C、Lua、Hashkell、Ruby等语言，但是他们都存在一些问题：使用门槛高、使用了阻塞I/O的库、历史包袱过重。

而Javascript的开发门槛较低、没有历史包袱，可以方便导入非阻塞I/O 库，在后端领域还没有市场。而且JavaScript在浏览器中有很好的事件驱动的实践。

基于这三点：高性能、符合事件驱动、没有历史包袱选择的JavaScript。

为什么叫Node？

- 脱离了最初构想，但远超最初构想。原本只想做了web服务器，但是发现可以在其基础之上构建很多东西：服务器、客户端、命令行工具。
- 可以为构建大型分布式应用程序提供基础设施。可以通过网络协议组织许多Node，达到扩展网络应用的目的。
- 每一个Node进程都可以构成应用中的一个节点。

## 1.3为JavaScript带来的意义

作为一个钱端开发工程师，给我的体会就是，没有node就没有今天繁荣的前端生态。

为JavaScript创建了一片新的天地，不仅限于浏览器环境，可以让其运行于服务端。为前端工程师创造了更多话语权。

![Chrome & Node组件构成图](/Users/xuguorui/study/JDR_Blog/images/555379-20190629130037468-2026745204.jpeg)



## 1.4 Node的特点

### 异步I/O

我的理解，这里有异步之说，那就有同步。这里的异步和同步，可以先按前端浏览器的异步同步进行去理解。

那什么是I/O？

I就是input，O就是output。输入/输出。

以前端发送请求为例：

```javascript
axios.post('/url').then(res => {
  console.log("收到响应")
})
console.log("发送请求结束")
```

![Ajax调用](/Users/xuguorui/study/JDR_Blog/images/screenshot-20220103-145336.png)[]()

熟悉浏览器事件循环的同学肯定知道，输出的结果"发送请求结束"肯定在"收到响应"之前完成。

以Node中读取文件为例：

```javascript
const fs = require('fs')
fs.readFile('/path', function(err, file) {
  console.log("读取文件完成")
})
console.log("发起读取文件")
```

![异步调用](/Users/xuguorui/study/JDR_Blog/images/screenshot-20220103-145443.png)



从上面的两个实例可以知道：

异步I/O就是发起Input任务后，并不阻塞后面的代码执行，等异步Input任务有了结果之后，程序会通过回调函数通知我们。也就是Output。

推荐阅读：[异步I/O是什么？](https://blog.cassite.net/2018/06/03/nonblock/)

### 事件与回调函数

以node监听请求事件为例。

```javascript
const http = require('http')
const queryString = require('querystring')

http.createSerevr(function(req, res) {
  let postData = ''
  req.setEncoding('utf8')
  req.on('data', function(chunk) {
    postData +=chunk
  })
  req.on('end' function() {
		res.end(postData)
  })
}).listen('8080')
```

前端发送请求：

```javascript
$.ajax({
  url: "/url”,
  method: "POST",
  'data': {},
  'success': fucntion(data) {
		console.log('请求成功！')
	}
})
```

从上面代码可以看到，前后端都有使用回调函数来处理事件。

> 回调函数是什么意思？
>
> 这是因为在JS中函数是一等公民，可以作为参数进行传递。
>
> 回调函数打个比喻：你告诉我一件事，要求我做完，但是做完之后需要通知你，而你可能会通过留个联系方式，让我来通知你。
>
> 相较于代码，让我做的事情，就是去通过调用一个函数或者监听一个事件，这个函数或者事件可以是异步的。而作为参数传递给函数或者事件的函数，就是相当于我联系你的方式，就是回调函数。

### 单线程

- 在Node中Javascript是单线程的。
- 单线程意味着无法与其它线程共享状态。
- 意味着没有死锁的状态，没有线程切换的开销。

单线程带来的问题：

- 无法利用多核CPU
- 错误会引起整个应用的退出，应用健壮性弱
- 大量计算占用CPU导致无法继续调用异步I/O

Node单线程解决方式：

child_process模块，创建子进程。

> 什么是线程？什么是进程？
>
> 阮一峰老师：[进程与线程的一个简单解释](https://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html)

### 跨平台

Linux与window都可以运行。window后面借助于libuv对Node的兼容处理。

## Node应用场景

- I/O密集型
- CPU密集型业务，需要有合理的调度方式
- 分布式应用——阿里巴巴有很好的实践





















