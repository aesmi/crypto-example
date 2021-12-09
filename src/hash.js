const { createHash } = require('crypto');
//https://nodejs.org/api/crypto.html

const hash = (input) => createHash('sha256').update(input).digest('hex');