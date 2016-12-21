var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Etudiant = require('../models/Etudiant.js');

//retourne tous les etudiants
router.get('/',function(req,res,next){

  Etudiant.find(function(err,etudiants)
{
 if (err) return next(err);
res.json(etudiants);
});


});

//post to my rest app a student




router.post("/", function(req, res,next) {
  var newEtudiant = req.body;




  Etudiant.create(newEtudiant, function(err, doc) {
    if (err) {
      return next(err);
    } else {
      res.status(201).json(doc);
    }
  });
});

module.exports = router;
