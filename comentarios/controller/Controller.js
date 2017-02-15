
var db = require('../model/model');



exports.index = function(request, response){
	console.log("index");
	response.render('index');
};

exports.getComentarios = function(request, response){
	console.log("comentarios");
	db.getComentarios(request,response);
};

exports.addComentario = function(request, response){
	console.log("add comentario");
	db.addComentario(request,response);
};


