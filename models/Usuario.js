'use strict'
/*
Generamos un modelo para invocar y usar las collectines de mongo
Es una estructura para usar dicha colección 
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
		nombre: String,
		apellido: String,
		email: String,
		pasww: String,
		perfil: String,
		imagen: String
});	

/*
Exportamos el modelo y aparecerá como plural, es decir será Usuarios
*/
module.exports = mongoose.model('Usuario',UsuarioSchema);

