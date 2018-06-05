'use strict'

var express = require('express');
var UserControler = require('../controllers/user');

var api = express.Router();

api.get('/probando-controlador', UserControler.pruebas);
api.post('/registro-usuario', UserControler.salvaUsuario);
module.exports = api;

