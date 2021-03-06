'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/users' });

api.post('/register', UserController.save_user);
api.post('/login', UserController.login_user);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
api.get('/find-user/:id', md_auth.ensureAuth, UserController.findUser);

module.exports = api;