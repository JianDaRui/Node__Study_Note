try {
  interview((status) => {
    console.log(status)
  })
} catch(e) {
  console.log('cry', e)
}

function interview(callback) {
  // 通过一个异步任务 抛出错误 是不能被 try catch 捕捉到的
  // 所以上面的代码是错误的，应该在通过一个错误捕捉回调函数
  // 进行错误捕捉
  // 这与node的异步循环方式有关
  setTimeout(() => {
    if(Math.random() > 0.5) {
      callback('success')
    } else {
      throw new Error('fail')
    }
  }, 500)
}