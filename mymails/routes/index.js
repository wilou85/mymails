var express = require('express');
var router = express.Router();
var UserModel = require('./bdd')






router.get('/', function(req, res, next) {

  res.render('index');
  });

/* Enregistrement des données dans BDD 
et récupération de l'ensemble des données via var users et find()
puis envoi à response.ejs => affichage dans response.ejs*/


  router.post('/info', async function(req, res, next) {
    var user = new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      })
    

    user.save();
    
      var users = await UserModel.find()

    res.render('reponse', {users});
    });


module.exports = router;

