// 通过alloc创建buffer
const buffer = Buffer.alloc(8)

console.log(buffer) // 00 00 00 00 00 00 00 00

buffer[0] = 99; // 以十六进制存储
buffer[1] = 0x88; 
console.log(buffer)