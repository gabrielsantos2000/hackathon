const crypto = require('crypto')
const DADOS_CRIPTOGRAFIA = {
    algoritmo: "aes256",
    segredo: "hackathon",
    tipo: "hex"
}

module.exports = {
    criptografar(senha) {
        const cipher = crypto.createCipher(DADOS_CRIPTOGRAFIA.algoritmo, DADOS_CRIPTOGRAFIA.segredo)
        cipher.update(senha)
        return cipher.final(DADOS_CRIPTOGRAFIA.tipo)
    },
    
    descriptografar(senha) {
        const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
        decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo);
        return decipher.final();
    }
}
