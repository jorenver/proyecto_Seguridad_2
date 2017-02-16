
var db = require('../model/model');



exports.index = function(request, response){
	console.log("index");
	response.render('index');
};

exports.indexSeguro = function(request, response){
	console.log("indexSeguro");
	response.render('indexSeguro');
};

exports.getComentarios = function(request, response){
	console.log("comentarios");
	db.getComentarios(request,response);
};

exports.addComentario = function(request, response){
	console.log("add comentario");
	db.addComentario(request,response);
};
exports.addComentarioSeguro = function(request, response){
	console.log("add comentario Seguro");
	db.addComentarioSeguro(request,response);
};



exports.getBusqueda = function(request, response){
	response.render('busqueda');
}

exports.getBusquedaSegure = function(request, response){
	response.render('busqueda_segura');
}

exports.getResults = function(request, response){
	db.getResults(request, response);
}


exports.getResultsSecure = function(request, response){
	db.getResultsSecure(request, response);
}
