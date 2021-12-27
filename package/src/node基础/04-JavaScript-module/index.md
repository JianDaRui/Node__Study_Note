## JavaScript 模块化

- IIFE，古老的方法，使用自执行函数创建模块化
- CommonJS，一种模块化规范，最初提出来是为了在浏览器以外的地方使用。
  - Node是CommonJS在服务端一个具有代表性的实现
  - Browserify是CommonJS在浏览器中的一种实现
- 在Node中一个文件就是一个单独的模块
- CommonJS规范的核心变量：**exports、module.exports、require**
- 可以使用变量来进行模**块化开发**



module.exports是什么？

- CommonJS规范并没有module.exports的概念

- 但是为了实现模块的导出，Node中使用的是Module的类，每一个模块都是Module的一个实例，也就是

  module

- 所以在Node中真正用于导出的其实根本不是exports，而是module.exports； 

- 因为module才是导出的真正实现者；

- 但是，为什么exports也可以导出呢？

- 这是因为module对象的exports属性是exports对象的一个引用；

- 也就是说 module.exports = exports = main中的bar；

require的细节：

- require 是一个函数，可以帮助我们引入一个文件中导入的对象
- require的查找规则
- 模块在第一次被引入的时候，会被运行一次
- 如果被多次引入，但最终最会运行一次
- 存在循环引用：http://nodejs.cn/api/modules.html#cycles

