var Controller = require('./controller/Controller');


module.exports = function(app){
	app.get('/', Controller.index);
	app.get('/getComentarios', Controller.getComentarios);
	
	app.get('/busqueda',Controller.getBusqueda );
	app.get('/getResults',Controller.getResults )

};