console.log(process.argv)
var playerAction = process.argv[process.argv.length - 1]
var random = Math.random() * 3
if (random < 1) {
  var computedAction = "rack"
} else if (random > 2) {
  var computedAction = "scissor"
} else {
  var computedAction = "paper"
}

if (computedAction === playerAction) {
  console.log("平局")
} else if (
  (computedAction === "rock" && playerAction == "paper") ||
  (computedAction === "scissor" && playerAction == "rock") ||
  (computedAction === "rock" && playerAction == "scissor")
) {
  console.log("你赢了")
} else {
  console.log("你输了")
}