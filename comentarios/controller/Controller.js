
var db = require('../model/model');



exports.index = function(request, response){
	console.log("index");
	response.render('index');
};

