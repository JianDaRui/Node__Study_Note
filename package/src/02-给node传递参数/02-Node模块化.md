## Process模块

- argv属性获取参数

## Node的输出

- console.log 输出日志
- console.trace 输出函数调用栈
- console.clear 清空输出
- console.dir 输出路径
- console.time 输出时间戳
- ...

- [全局对象](http://nodejs.cn/api/globals.html)

## 特殊的全局对象

为什么我称之为特殊的全局对象呢？

- 这些全局对象可以在模块中任意使用，但是在命令行交互中是不可以使用的；
- 包括：__dirname、__filename、exports、module、require()
- **__dirname：**获取当前文件所在的路径： 
- 注意：不包括后面的文件名 
- **__filename：**获取当前文件所在的路径和文件名称：
- 注意：包括后面的文件名称

## global

- global是一个全局对象，事实上前端我们提到的process、console、setTimeout等都有被放到global中：

## global与window的区别

- 在浏览器中，全局变量都是在window上的，比如有document、setInterval、setTimeout、alert、console等等

- 在Node中，我们也有一个global属性，并且看起来它里面有很多其他对象。

- 但是在浏览器中执行的JavaScript代码，如果我们在顶级范围内通过var定义的一个属性，默认会被添加到window对象上

- 但是在node中，我们通过var定义一个变量，它只是在当前模块中有一个变量，不会放到全局中

  