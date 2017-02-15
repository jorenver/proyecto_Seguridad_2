var mysql = require('mysql');

var db = mysql.createConnection({
  host:     '127.0.0.1',
  user:     'root',
  password: 'cualquiera123',
  database: 'baseproductos'
});


exports.getComentarios= function(request, response){ //recibe un objeto ruta

	var queryString = "SELECT * FROM comentario";
	db.query(queryString, function(err, rows, fields) {
	    if (err) throw err;
	 
	    console.log(rows);
		response.json({comentarios:rows});
	});

}

exports.addComentario= function(request, response){ //recibe un objeto ruta
	texto = request.body.texto;
	console.log(texto)
	var queryString = " INSERT INTO comentario SET  ? ";
	db.query(queryString,{texto:texto},function(){
		console.log("se agrego el comentario");
		response.json({value:true});
	});

}


exports.getResults = function(request, response){
	var product_str = unescape(request.query.str);
	console.log(product_str)
	var queryString = "SELECT nombre,precio FROM producto WHERE nombre LIKE \"%" + product_str + "%\""
	console.log(queryString)

	db.query(queryString, function(err, rows, fields){
		if(err) throw err;

		console.log(rows)
		response.json({productos:rows});
	});


}

exports.getResultsSecure = function(request, response){
	var product_str = unescape(request.query.str);
	console.log(product_str)
	var escaped_query = db.escape('%'+product_str+'%');
	console.log(escaped_query)
	//escaped_query.pop(0);
	//escaped_query.shift();
	var queryString = 'SELECT nombre,precio FROM producto WHERE nombre LIKE ' + escaped_query;
	console.log(queryString)

	db.query(queryString,function(err, rows, fields){
		if(err) throw err;

		console.log(rows)
		response.json({productos:rows});
	});

}


