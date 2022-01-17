var playerAction = process.argv[process.argv.length - 1]
var game = require('./lib.js')

var count = 0;
process.stdin.on("data", (e) => {
  var action = e.toString().trim()
  var result = game(playerAction);
  if(result === 1) {
    count += 1
  }
  if(count >= 3) {
    console.log("你太厉害了，我不玩了")
    process.exit()
  }
})
