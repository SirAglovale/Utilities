global._utils = {
    application: {}
};

/**
 * Global modules
 */
require('./logging');

/**
 * Scoped modules
 */
let {
    setApplication
} = require('./application');

let {
    b64toAscii,
    b64toUTF8,
    b64toUTF16LE,
    b64toHex,

    hextoAscii,
    hextoUTF8,
    hextoUTF16LE,
    hextoB64,

    asciitoHex,
    asciitoB64,
    asciitoUTF16LE,
    asciitoUTF8,

    utf8toAscii,
    utf8toB64,
    utf8toHex,
    utf8toUTF16LE
} = require('./encoding');

let {
    hashPassword,
    verifyPassword
} = require('./password');

let {
    genQR,
    genSecret,
    verifyTFA
} = require('./2fa');

module.exports = {
    setApplication,

    b64toAscii,
    b64toUTF8,
    b64toUTF16LE,
    b64toHex,

    hextoAscii,
    hextoUTF8,
    hextoUTF16LE,
    hextoB64,

    asciitoHex,
    asciitoB64,
    asciitoUTF16LE,
    asciitoUTF8,

    utf8toAscii,
    utf8toB64,
    utf8toHex,
    utf8toUTF16LE,

    hashPassword,
    verifyPassword,

    genQR,
    genSecret,
    verifyTFA
}