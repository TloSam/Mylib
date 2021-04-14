var express = require('express');
var router = express.Router();

const BookModel = require("../model/book");



router.post('/cadastrarl', function (req, res, _next) {
    const { nomeb, editora, versao, autor, empr } = req.body
    new BookModel({
        nomeb,
        editora,
        versao,
        autor,
        empr: 'false'

    })
        .save(function (err) {
            if (err) {
                console.log(err)
                res.send("erro ao cadastrar livro")
            }
            else {

                res.send("Livro cadastrado")
            }
        }
        )
}); //criar livro

router.delete('/deleteb', function (req, res, _next) {

    BookModel.findByIdAndDelete((req.body._id), function (err, _result) {
        if (err) {
            console.log(err)
            res.send("Erro ao deletar livro")
        }
        else {
            res.send("Livro deletado")
        }
    }
    );
}); //deletar livro


router.post('/abook', function (req, res, _next) {

    BookModel.findByIdAndUpdate(req.body._id,
        { nomeb: req.body.nomeb, editora: req.body.editora, versao: req.body.versao, autor: req.body.autor }, function (err, _data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send("Livro atualizado");

            }
        })
}); //atualizar livro

router.put('/gb', function (req, res, _next) {
    const { nomeb, empr } = req.body;
    BookModel.findOne({ nomeb }).exec((err, nomeb) => {
        if (err) {
            return res.status(500)
        }

        if (!nomeb) {
            return res.status(403).send("Livro não encontrado")


        }
        if(nomeb.empr===false){
            res.send("Livro não se encontra emprestado")
        }
       
        else  {

            BookModel.findByIdAndUpdate(req.body._id, {empr: req.body.empr }).exec(function (err, _data) {
                if (err) {
                   console.log(err);
                }
                else {
                    res.send('Devolvido!');
                }
                
            }
                
            )}
        
    }
    
   

     
 
    )
    


    }); //Devolver livro

    router.put('/loan', function (req, res, _next) {
        const { nomeb, empr } = req.body;
        BookModel.findOne({ nomeb }).exec((err, nomeb) => {
            if (err) {
                return res.status(500)
            }
    
            if (!nomeb) {
                return res.status(403).send("Livro não encontrado")
    
    
            }
            if(nomeb.empr===true){
                return res.send("Livro não disponível para empréstimo")
            }
           
            else  {
    
                BookModel.findByIdAndUpdate(req.body._id, {empr: req.body.empr }).exec(function (err, _data) {
                    if (err) {
                       console.log(err);
                    }
                    else {
                        res.send('Livro emprestado!');
                    }
                    
                }
                    
                )}
            
        }
        
       
    
         
     
        )
        
    
    
        });//Emprestar Livro



module.exports = router

/* router.get('/books', function (req, res, next) {
    res.render('books');
}) // view

router.get('/', function (req, res, next) {
    res.send('book');
}) //todos os livro

router.post('/', function (req, res, next) {
    res.send('book');
}) //criar livro

router.delete('/', function (req, res, next) {
    res.del('deleteb');
})  //deletar livro


router.post('/', function (req, res, next) {
    res.send('abook')
}); //atualizar livro ( nome ) */