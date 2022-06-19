/* 
file: models/contacts.js
author: Hardip Patel (301230213)
date: June 16, 2022
*/
let mongoose = require("mongoose");

let contactModel = mongoose.Schema(
  {
    name: String,
    number: String,
    email: String,
  },
  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("contacts", contactModel);
