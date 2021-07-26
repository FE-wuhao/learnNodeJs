/*
 * @Author: 吴灏
 * @Date: 2021-07-27 00:24:40
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-27 00:38:35
 * @Description: file content
 */
const express = require("express");

const router = express.Router();

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
