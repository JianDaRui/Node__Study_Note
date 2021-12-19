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

