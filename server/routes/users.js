/* 
file: users.js
author: Hardip Patel (301230213)
date: June 3, 2022
*/
var express = require("express");
var router = express.Router();
let usersController = require('../controllers/user');

//GET : endpoints to route to Login
router.get("/login", usersController.displayLoginPage);
router.post("/login", usersController.processLoginPage);
//GET : endpoint to route to Logout
router.get("/logout", usersController.processLogout);

module.exports = router;