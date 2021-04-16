var express = require('express');
const { findByIdAndDelete } = require('../model/user');
var router = express.Router();
const UserModel = require("../model/user");

/* GET users listing. */
router.get('/', function (req, res, _next) {
  res.send('respond with a resource');
});


/* router.post('/update', function (req, res, next) {
  res.send('update');
}); */

//login user

router.post('/login', function (req, res, _next) {
  const { email, senha } = req.body;

  if (!email) return res.end('informe o email')

  UserModel.findOne({ email }).exec((err, usuario) => {



    if (err) {
      return res.status(500).send("Erro ao realizar login")
    }

    if (!usuario) {
      return res.status(403).send("Usuário não encontrado")
    }

    if (usuario.senha !== senha) {
      return res.status(403).send("Senha incorreta")
    }

    res.redirect('/books')
  })

});

//crud user
router.post('/registrar', function (req, res, _next) {
  const { nome, email, senha } = req.body
  new UserModel({
    nome,
    email,
    senha
  }).save(function (err) {
    if (err) {
      console.log(err)
      res.send("Erro ao  cadastrar usuário")
    } else {
      res.send("Usuário cadastrado")
    }
  })
});

router.delete('/deleteu', function (req, res, _next) {
  const { _id } = req.body;
  
  UserModel.findById(req.body._id).exec((err, usuario) => {
    if (!usuario) {
      return res.status(403).send("Usuario não encontrado")
    }
    else {

      UserModel.findByIdAndDelete((req.body._id), function (err) {
        if (err) {
          console.log(err);
        }
        else {
          res.send("Usuario deletado")
        }
      }

      )
    }
  })



});



router.post('/update', function (req, res, _next) {
const {nome, email, senha} = req.body;


  UserModel.findByIdAndUpdate(req.body,
    { nome: req.body.nome, senha: req.body.senha, email: req.body.email }, function (err, _id,_nome,_senha,_email) {


      if (!_id || err) {
        console.log('Informe ID correto', err);
        res.send("informe o ID correto");
      }

      else {
        res.send("Usuário atualizado");

      }
    })

});


module.exports = router
