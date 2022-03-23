const { body, validationResult } = require('express-validator');
const Hobby = require('../models/hobby');
function getHobbies(req, res) {
  Hobby.find((err, hobbies_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(hobbies_list);
    }
  });
}
const createHobby = [
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      let { name, description, date_of_creation } = req.body;
      console.log(req.body);
      let hobbyObject = new Hobby({ name, description, date_of_creation });
      hobbyObject.save((error) => {
        if (error) {
          res.json(error);
        } else {
          res.json({ status: 'Successfully adding hobby complete' });
        }
      });
    }
  },
];
function deleteHobby(req, res) {
  console.log(req.params._id);
  Hobby.findByIdAndDelete(req.params._id, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`Hobby with _id as ${req.params._id} is removed`);
    }
  });
}
module.exports = { getHobbies, createHobby, deleteHobby };
