'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;
/*
La siguinete línea de código elimina el aviso de mongoose
que devuelve por la consola donde hemos lanzado el npm start
*/
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/curso', (err,res) => {
	if (err){
		 throw err;
	}else{
		console.log("La conexión ha sido satisfactoria....");
		app.listen(port, function(){
			console.log("Servidor del api rest de musica escuchando en http://localhost:"+port);
		});
	}
});