var Controller = require('./controller/Controller');


module.exports = function(app){
	app.get('/', Controller.index);
	app.get('/getComentarios', Controller.getComentarios);
	app.post('/addComentario', Controller.addComentario);
	

};