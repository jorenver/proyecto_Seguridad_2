var mysql = require('mysql');

var db = mysql.createConnection({
  host:     '127.0.0.1',
  user:     'root',
  password: '',
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

exports.getResults = function(request, response){
	var product_str = unescape(request.query.str);
	console.log(product_str)
	var queryString = "SELECT * FROM producto WHERE nombre LIKE \"%" + product_str + "%\""
	console.log(queryString)

	db.query(queryString, function(err, rows, fields){
		if(err) throw err;

		console.log(rows)
		response.json({productos:rows});
	});


}


