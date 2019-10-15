const mongoose = require('mongoose')

const AdministradorSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    usuario: {
        type: String,
        required: true
    },

    senha: {
        type: String,
        required: true
    },
    
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Administrador', AdministradorSchema)