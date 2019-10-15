const User = require('../models/User')
const crypto = require('../config/crypto')

module.exports = {

    async store(req, res) {
        try {
            const { email, usuario, senha, isAdmin } = req.body

            let user = await User.findOne(usuario)
            user = await User.findOne(email)
    
            if (!user) {
                user = await User.create({
                    email: email,
                    usuario: usuario,
                    senha: crypto.criptografar(senha),
                    isAdmin: isAdmin
                })
    
    
                return res.status(201).json(user)
            }
    
            return res.status(200).json({ error: "Este usuário já existe" })
        } catch (error) {
            res.status(400).send({
                message: 'Falha ao deletar'
            })
        }
    },

    async show(req, res) {
        try {
            let users = await User.find();

            if (users.length > 0) {
                return res.status(200).json(users)
            }
    
            return res.status(400).json({ msg: "Não existe nenhum usuário criado!" })            
        } catch (error) {
            res.status(400).send({
                message: 'Falha ao deletar'
            })
        }

    },

    async destroy(req, res) {
        try {
            const { user_id } = req.params

            let user = await User.findById(user_id)

            
            if (!user) {
                return res.status(400).json({ error: 'Usuário não existe.' })
            }

            await User.findOneAndDelete(user_id)

            return res.status(200).json({ msg: "Usuário deletado." })
        } catch (error) {
            res.status(400).send({
                message: 'Falha ao deletar'
            })
        }
    }

}