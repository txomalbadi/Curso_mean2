'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
Ver la carácteristica del campo Artista. Se define como tipo de dato Id de la collection Artista
lo que relacionará las dos colecciones.
*/
var AlbumSchema = Schema({
		titulo: String,
		descripcion: String,
		año: Number,
		imagen: String,
		artista:{type: Schema.ObjectId, ref: 'Artista'}
});	

module.exports = mongoose.model('Album',AlbumSchema);