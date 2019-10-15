const express = require('express')
const multer = require('multer')
const uploadConfig = require('../config/upload')

const UserController = require('../controller/UserController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/users', UserController.store)
routes.get('/users', UserController.show)
routes.delete('/users/:user_id', UserController.destroy)

module.exports = routes