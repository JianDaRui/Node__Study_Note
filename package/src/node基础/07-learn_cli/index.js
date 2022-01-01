#!/usr/bin/env node 
// 上面的叫 sei ba

// commander.js 
const program = require("commander")

console.log("coder 狂想曲")
const version = require('./package.json').version
program.version(version)

// 对控制台参数进行解析
program.parse(process.argv)