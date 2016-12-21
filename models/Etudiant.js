var mongoose = require('mongoose');

var EtudiantSchema = new mongoose.Schema({
  firstName : String ,
  lastName : String,
  identifier : String,
  mail : String

});

module.exports = mongoose.model('Etudiant',EtudiantSchema);
