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


