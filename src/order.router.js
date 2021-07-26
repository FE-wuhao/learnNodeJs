/*
 * @Author: 吴灏
 * @Date: 2021-07-27 00:35:10
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-27 00:36:06
 * @Description: file content
 */
const express = require("express");

const router = express.Router();

router.get("/list", (req, res) => {
  res.json({
    list: [
      {
        id: 1,
        name: "一笔大单子",
      },
    ],
  });
});

module.exports = router;
