'use strict'
/*creamos el siguiente método pruebas 
en request es lo que va a recibir en la petición y las response 
el lo que va a devolver
*/
// cargamos bcrypt para encriptacion de datos, en este caso la contraseña de usuario
var bcrypt = require('bcrypt-nodejs');
//importamos el modelo para la funcion de incorporar nuevos usurios SaveUser
// con require s e carga el modelo  o lo que se necesite
var Usumodelo = require('../models/Usuario');

function pruebas(req, res){
    res.status(200).send({
        message: 'Probando una acción del controlador de usuarios del api rest con Node y Mongo'
    });

};

function salvaUsuario(req, res){
//instancio un nuevo usuario del moelo usuario
    var user = new Usumodelo();
//en params almaceno los datos del push dónde se habá solicitado los datos en el combo
    var params = req.body;

    console.log(params);
    
    user.nombre = params.nombre;
    user.apellido = params.apellido;
    user.email = params.email;
    user.pasww = params.pasww;
    user.perfil = 'ROLE_USER';
    user.imagen = 'null';

    if (params.pasww) {
    // encriptar la contraseña y guardar datos
    } else {
        res.status(500).send({message: 'Introducir la contraseña'});
    }


}

module.exports = {
    pruebas,
    salvaUsuario
};
