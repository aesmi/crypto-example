const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

const signup = (email, password) => {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');
    // https://nodejs.org/api/crypto.html#cryptoscryptsyncpassword-salt-keylen-options
    const user = { email, password: `${salt}:${hashedPassword}` }
}

const login = (user, password) => {
    const user = user.find(v => v.email === email);
    const [salt, key] = user.password.split(',');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
}