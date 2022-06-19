/* 
file: routes/index.js
author: Hardip Patel (301230213)
date: June 18, 2022
*/
var express = require("express");
var router = express.Router();

let indexRouteController = require("../controllers/index");
//GET : endpoints to route to Home
router.get("/", indexRouteController.routeToHomePage);
router.get("/home", indexRouteController.routeToHomePage);
//GET : endpoint to route to About Me
router.get("/aboutme", indexRouteController.routeToAboutMe);
//GET : endpoint to route to Projects
router.get("/projects", indexRouteController.routeToProjects);
//GET : endpoint to route to Services
router.get("/services", indexRouteController.routeToServices);
//GET : endpoint to route to Contact Me
router.get("/contactme", indexRouteController.routeToContactMe);

//GET : endpoints to route to Logib
router.get("/login", indexRouteController.displayLoginPage);
router.post("/login", indexRouteController.processLoginPage);
//GET : endpoint to route to Logout
router.get("/logout", indexRouteController.processLogout);

module.exports = router;