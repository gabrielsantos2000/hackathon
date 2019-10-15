const express = require('express')
const multer = require('multer')
const uploadConfig = require('../config/upload')

const AdministradorController = require('../controller/AdministradorController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/users', AdministradorController.store)

module.exports = routes