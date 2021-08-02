/*
 * @Author: 吴灏
 * @Date: 2021-07-27 00:24:40
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-08-02 20:34:35
 * @Description: file content
 */
const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  res.json({
    code: 0,
    data: null,
    messge: "这是一个路由级别中间件",
  });
  next();
});

router.get("/list", (req, res) => {
  res.json({
    list: [
      {
        id: 1,
        name: "一个好男人",
      },
    ],
  });
});

module.exports = router;
