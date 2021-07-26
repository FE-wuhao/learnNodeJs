/*
 * @Author: 吴灏
 * @Date: 2021-07-17 17:07:54
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-27 00:38:07
 * @Description: file content
 */
// #region nodejs内置os库
// // 读取系统cpu信息
// const os = require("os");
// // 获取当前系统的cpu的数量
// const cpus = os.cpus();

// console.log(cpus.length);

// // 获取内存的信息
// const total = os.totalmem();

// console.log(total / 1024 / 1024 / 1024);

// // 读取电脑剩余内存
// const rest = os.freemem();

// console.log(rest / 1024 / 1024 / 1024);
// // #endregion

// // #region nodejs内置http库
// // web服务
// const http = require("http");
// // 创建web服务对象
// const server = http.createServer((req, res) => {
//   res.end("hello");
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("服务启动成功");
// });
// #endregion

// #region 基于express进行简单的接口请求
// const express = require("express");

// const port = 3001;

// const app = express();

// // app.use((req, res) => {
// //   res.json({
// //     name: "测试",
// //   });
// // });

// app.get("/name/:age", (req, res) => {
//   console.log(`我的年龄是${req.params.age}`);

//   res.send("吴灏");
// });

// app.post("/engliseName", (req, res) => {
//   res.send("Ade");
// });

// app.listen(port, () => {
//   console.log("服务启动成功");
// });

// #endregion

// #region express的路由
/**
 * 1.根据请求的方法名区分路由：get、post、put、delete
 * 2.根据uri区分：如下方的/user/byName和/user/byAge
 */
const express = require("express");

const port = 3001;

const app = express();

// app.get("/user/byName", (req, res) => {
//   const params = req.query;

//   res.send(params);
// });

// app.get("/user/byAge", (req, res) => {
//   const params = req.query;

//   res.send(params);
// });
// // app.all响应所有的method
// app.all("/user/byname", (req, res) => {
//   res.send(`ceshi${req.method}`);
// });
// // app.all响应所有的请求
// app.all("*", (req, res) => {
//   res.send(`ceshi${req.method} ${req.path}`);
// });

// // app.use实现响应所有的请求(把路由当作中间件)
// app.use((req, res) => {
//   res.send(`ceshi${req.method} ${req.path}`);
// });

/**
 * 做路由拆分，假设有三个路由：member、order、product
 * 1.做文件的拆分
 * 2.注册路由
 */
// 引入
const memberRouter = require("./member.router");
// 注册,use的第一个参数的作用是为注册的一整个路由添加一个根前缀
app.use("/member", memberRouter);
// 引入
const orderRouter = require("./order.router");
// 注册,use的第一个参数的作用是为注册的一整个路由添加一个根前缀
app.use("/order", orderRouter);
// 引入
const productRouter = require("./product.router");
// 注册,use的第一个参数的作用是为注册的一整个路由添加一个根前缀
app.use("/product", productRouter);

app.listen(port, () => {
  console.log("服务启动成功");
});
// #endregion
