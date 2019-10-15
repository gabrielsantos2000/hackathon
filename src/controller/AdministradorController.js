const Administrador = require('../models/Administrador')
const crypto = require('../config/crypto')

module.exports = {
    async store(req, res) {
        const { email } = req.body
        const { usuario } = req.body
        const { senha } = req.body

        let user = await Administrador.create({ 
            email: email,
            usuario: usuario,
            senha: crypto.criptografar(senha)
        })

        if(!user){
             user = await Administrador.create({ email })
        }

        return res.json(user)
    },  

}