const { createHmac } = require('crypto');

const key = 'super-secrete';
const message = 'boo 👻';

const hmac = createHmac('sha256', key).update(message).digest('hex');

const key2 = 'other-password';
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');

const cipher = createCipheriv('aes256', key, iv);
// https://nodejs.org/api/crypto.html#cryptocreatecipherivalgorithm-key-iv-options
// returns a Cipher object
// https://nodejs.org/api/crypto.html#class-cipher

// Encrypt

const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');