/* 
file: users.js
author: Hardip Patel (301230213)
date: June 3, 2022
*/
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;