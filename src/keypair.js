const { generateKeyPairSync } = require('crypto');

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    // rsa = rivest-shamir-adleman
    modulusLength: 2048, //length of your key in bits
    publicKeyEncoding: {
        type: 'spki', // recommended to be spki by node.js docs
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8', // recommended to be pkcs8 by node.js docs
        format: 'pem', // private enhanced mail
        // cipher: 'aes-256-cbc',
        // passphrase: 'top secret'
    }
});

console.log(publicKey);
console.log(privateKey);

module.exports = {
    publicKey,
    privateKey
}