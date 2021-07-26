/*
 * @Author: 吴灏
 * @Date: 2021-07-27 00:34:55
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-27 00:36:17
 * @Description: file content
 */
const express = require("express");

const router = express.Router();

router.get("/list", (req, res) => {
  res.json({
    list: [
      {
        id: 1,
        name: "一个好商品",
      },
    ],
  });
});

module.exports = router;
