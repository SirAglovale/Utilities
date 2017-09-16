const { generateSecret, verifyToken } = require('node-2fa');
const { imageSync } = require('qr-image');

/**
 * Generate a secret to store in the database based off of the email. This must be a valid email
 * @param {String} _email
 */
const genSecret = (_email) => {
    let secret = generateSecret({name: global._utils.application.name, account: _id});
    return secret.secret;
}

/**
 * Verify the token sent to the server is valid.
 * @param {String} _token 
 * @param {String} _secret 
 */
const verifyTFA = (_token, _secret) => {
    return verifyToken(_secret, _token);
}

/**
 * 
 * @param {String} _secret 
 * @param {String} _email 
 */
const genQR = (_secret, _email) => {
    const image = imageSync('otpauth://totp/' + global._utils.application.name + ':' + _email + '?secret=' + secret + '&issuer=' + global._utils.application.name).toString('base64');

    return image;
}

module.exports = {
    genSecret,
    verifyTFA,
    genQR
}
