#!/usr/bin/env node 
// 上面的叫 sei ba

// commander.js 
const program = require("commander")
const createCommanders = require("./lib/core/create")
const helpOptions = require("./lib/core/help")


// console.log("coder 狂想曲")
const version = require('./package.json').version
// program.version(version)

createCommanders()
// 
helpOptions()

// 对控制台参数进行解析
program.parse(process.argv)

// console.log(program.dest)