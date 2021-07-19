/*
 * @Author: 吴灏
 * @Date: 2021-07-17 17:07:54
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-19 17:49:42
 * @Description: file content
 */
// #region nodejs内置os库
// 读取系统cpu信息
const os = require("os");
// 获取当前系统的cpu的数量
const cpus = os.cpus();

console.log(cpus.length);

// 获取内存的信息
const total = os.totalmem();

console.log(total / 1024 / 1024 / 1024);

// 读取电脑剩余内存
const rest = os.freemem();

console.log(rest / 1024 / 1024 / 1024);
// #endregion

// #region nodejs内置http库
// web服务
const http = require("http");
// 创建web服务对象
const server = http.createServer((req, res) => {
  res.end("hello");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("服务启动成功");
});
// #endregion
