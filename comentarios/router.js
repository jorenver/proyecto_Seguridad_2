var Controller = require('./controller/Controller');


module.exports = function(app){
	app.get('/', Controller.index);
	

};