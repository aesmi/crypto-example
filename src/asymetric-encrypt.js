const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('keypair.js');

// READ: https://www.sohamkamani.com/nodejs/rsa-encryption/

const message = 'the weebs are coming';

const encryptedData = publicEncrypt(publicKey,
    Buffer.from(message));
// https://nodejs.org/api/buffer.html#buffer
console.log(encryptedData.toString('hex'));

const decryptedData = privateDecrypt(privateKey, encryptedData);