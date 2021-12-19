let name = "bar.js";
const age = 18;
function HelloWorld() {
  console.log("Hello World")
}
setTimeout(() => {
  name = "main.js"
}, 1000)
setTimeout(() => {
  console.log(name)
}, 3000)
exports.name = name;
exports.age = age;
exports.HelloWorld = HelloWorld;

module.exports = {
  name,
  age,
  HelloWorld
};
