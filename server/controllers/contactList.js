/* 
file: controllers/contactList.js
author: Hardip Patel (301230213)
date: June 18, 2022
*/

let contacts = require("../models/contacts");

//Displays a list of Contacts
module.exports.displayContactList = (req, res, next) => {
  contacts.find((err, contacts) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("businesscontact/list", {
        title: "Business Contact",
        ContactList: contacts,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};


//Displays an edit page
module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;
  console.log("edit id: " + id);
  contacts.findById(id, (err, contactToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // show the contact view
      res.render("businesscontact/edit", {
        title: "Edit a Contact",
        contact: contactToEdit,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

//Update the data submitted on  the edit page
module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  contacts.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Contact not found. Contact id : ${id}`,
        });
      } else {
        res.redirect('/businesscontact');
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error occurred while updating contact information" });
    });
};

//Deletes the selected contact
module.exports.deleteContact = (req, res, next) => {
  let id = req.params.id;
  contacts.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/businesscontact");
    }
  });
};
