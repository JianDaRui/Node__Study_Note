// node 自有模块util promisify 可以将回调转为promise形式
const { promisify } = require("util")
const download = promisify(require("download-git-repo"));
const open = require("open");
const { vueRepo } = require("../config/repo-config")
const { commandSpawn } = require("../utils/terminal")

const createProjectAction = async (project) => {
  /**
   * 1. clone 项目 download-git-repo 包的使用
   * 2. 执行npm install
   * 3. 运行npm run serve
   * 4. 打开浏览器
   * */
  console.log("coder helper you create your project")
  // 1 通过 async 转promise 链式调用为 await
  await download(vueRepo, project, { clone: true })
  // 2 执行npm install
  const command = process.platform === "win32" ? "npm.cmd" : "npm"
  await commandSpawn(command, ["install"], {cwd: `./${project}`})

  // 3 运行npm run serve
  // await commandSpawn(command, ["run", "serve"], {cwd: `./${project}`})
  commandSpawn(command, ["run", "serve"], {cwd: `./${project}`})
  // 4 打开浏览器
  open("http://localhost:8080/")
}

module.exports = {
  createProjectAction
}