var BookModel = require("../model/book");
var UserModel = require("../model/user");

module.exports.index = function(req,res){
    res.render('index', { title: 'MyLib' });
}

/*module.exports.store = function(req,res){
    

    req.assert('nomeb','Preencha um Nome').notEmpty();  
    req.assert('nomeb', 'Nome deve ter de 3 a 20 caracteres').len(3, 20);
    req.assert('editora','Preencha um Nome').notEmpty();  
    req.assert('editora', 'Nome deve ter de 3 a 20 caracteres').len(3, 20);
    req.assert('versao','Coloque a versão').notEmpty();
    req.assert('versao','Versão deve ser número.')

}
*/

