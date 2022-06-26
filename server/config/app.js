/*
file: config/app.js
author: Hardip Patel (301230213)
date: June 3, 2022
*/
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
let session = require('express-session');
let passport = require('passport');
let flash = require('connect-flash');

var indexRouter = require("../routes/index");
var usersRouter = require("../routes/users");
var contactsRouter = require("../routes/contact");

// database setup
let mongoose = require("mongoose");
let DB = require("./db");

// point mongoose to db URI
mongoose.connect(DB.URI);

let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error!"));
mongoDB.once("open", () => {
  console.log("Conneced to MongoDB!");
});

var app = express();

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "sessionSecret"
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../node_modules")));


// create a User Model Instance

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/businesscontact", contactsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
