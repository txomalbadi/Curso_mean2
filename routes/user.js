'use strict'

var express = require('express');
var UserControler = require('../controllers/user');

var api = express.Router();

api.get('/probando-controlador', UserControler.pruebas);

module.exports = api;

