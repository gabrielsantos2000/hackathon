const mongoose = require('mongoose')

const AdministradorSchema = new mongoose.Schema({
    email: String,
    usuario: String,
    senha: String
},{
    timestamps: true
})

module.exports = mongoose.model('Administrador', AdministradorSchema)