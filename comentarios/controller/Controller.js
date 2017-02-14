
var db = require('../model/model');



exports.index = function(request, response){
	console.log("index");
	response.render('index');
};

exports.getComentarios = function(request, response){
	console.log("comentarios");
	db.getComentarios(request,response);
};

exports.getBusqueda = function(request, response){
	response.render('busqueda');
}


exports.getResults = function(request, response){
	db.getResults(request, response);
}
