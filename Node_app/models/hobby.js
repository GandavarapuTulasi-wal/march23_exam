var mongoose = require('mongoose');
var HobbySchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 20, minLength: 5 },
  description: { type: String, required: true, maxLength: 500, minLength: 10 },
  date_of_creation: { type: Date },
});
module.exports = mongoose.model('Hobby', HobbySchema);
