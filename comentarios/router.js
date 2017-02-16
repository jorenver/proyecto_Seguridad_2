var Controller = require('./controller/Controller');


module.exports = function(app){
	app.get('/', Controller.index);
	app.get('/seguro', Controller.indexSeguro);
	app.get('/getComentarios', Controller.getComentarios);
	app.post('/addComentario', Controller.addComentario);
	app.post('/addComentarioSeguro', Controller.addComentarioSeguro);
	
	app.get('/busqueda',Controller.getBusqueda );
	app.get('/busqueda_s',Controller.getBusquedaSegure );
	app.get('/getResults',Controller.getResults );
	app.get('/getResultsSecure',Controller.getResultsSecure );

};