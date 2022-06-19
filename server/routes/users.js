/* 
file: users.js
author: Hardip Patel (301230213)
date: June 3, 2022
*/
var express = require("express");
var router = express.Router();

router.get('/', userspage);

/* GET users listing. */
function userspage(req, res, next) {
  res.render(
    'users', 
    { 
      title: 'Users',
      userName: 'Hardip'
    }
  );
}

module.exports = router;