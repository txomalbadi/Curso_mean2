'use strict'
/*creamos el siguiente método pruebas 
en request es lo que va a recibir en la petición y las response 
el lo que va a devolver
*/

function pruebas(req, res){
    res.status(200).send({
        message: 'Probando una acción del controlador de usuarios del api rest con Node y Mongo'
    });

};

module.exports = {
    pruebas
};
