const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

// cipher

const message = 'i like samoyeds';
const key = randomBytes(32);
const iv = randomBytes(16);

const ciper = createCipheriv('aes256', key, iv);

// encrypt

const encryptedMessage = cipher.update(message,)