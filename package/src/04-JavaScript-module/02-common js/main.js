const bar = require('./bar')
console.log(bar.name)
console.log(bar.age)
bar.HelloWorld()
setTimeout(() => {
  console.log(bar.name)
  bar.name = "哈哈哈"
}, 2000)