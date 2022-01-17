const program = require('commander')

const helpOptions = () => {
  // 增加自己的options
  program.option('-C --coder', 'a coder cli')

  program.option('-d --dest <dest>', 'a destination folder, 例如: -d /src/components')
  program.option('-f --framework <framework>', 'your framework')

  // 监听指令
  program.on('--help', function() {
    console.log("")
    console.log("Help Info:")
    console.log("...")
  })
}

module.exports = helpOptions