/*
 * @Author: 吴灏
 * @Date: 2021-07-17 17:07:54
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-17 17:14:20
 * @Description: file content
 */
// 读取系统cpu信息
const os = require("os");

const cpus = os.cpus(); // 获取当前系统的cpu的数量

console.log(cpus.length);

// 获取内存的信息
const total = os.totalmem();

console.log(total / 1024 / 1024 / 1024);

// 读取电脑剩余内存
const rest = os.freemem();

console.log(rest / 1024 / 1024 / 1024);

// web服务
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("服务启动成功");
});
