/**
 * Convert Base 64 to Ascii
 * @param {String} base64 
 */
const b64toAscii = (base64) => {
    try {
        var buffer = new Buffer(base64, 'base64');
        return buffer.toString('ascii');
    }
    catch(err) {
        error(err);
    }
}

/**
 * Convert Base 64 to UTF-8
 * @param {String} base64 
 */
const b64toUTF8 = (base64) => {
    try {
        var buffer = new Buffer(base64, 'base64');
        return buffer.toString('utf8');
    }
    catch(err) {
        error(err);
    }
}

/**
 * Convert Base64 to UTF 16 Little Endian
 * @param {String} base64 
 */
const b64toUTF16LE = (base64) => {
    try {
        var buffer = new Buffer(base64, 'base64');
        return buffer.toString('utf16le');
    }
    catch(err) {
        error(err);
    }
}

/**
 * Convert Base64 to hex
 * @param {String} base64 
 */
const b64toHex = (base64) => {
    try {
        var buffer = new Buffer(base64, 'base64');
        return buffer.toString('hex');
    }
    catch(err) {
        error(err);
    }
}


/**
 * Convert Hex to Ascii
 * @param {String} hex 
 */
const hextoAscii = (hex) => {
    try {
        var buffer = new Buffer(hex, 'hex');
        return buffer.toString('ascii');
    }
    catch(err) {
        error(err);
    }
}

/**
 * Convert hex to UTF-8
 * @param {String} hex 
 */
const hextoUTF8 = (hex) => {
    try {
        var buffer = new Buffer(hex, 'hex');
        return buffer.toString('utf8');
    }
    catch(err) {
        error(err);
    }
}

/**
 * Convert Base64 to UTF 16 Little Endian
 * @param {String} hex 
 */
const hextoUTF16LE = (hex) => {
    try {
        var buffer = new Buffer(hex, 'hex');
        return buffer.toString('utf16le');
    }
    catch(err) {
        error(err);
    }
}

/**
 * Convert hex to Base 64
 * @param {String} hex 
 */
const hextoB64 = (hex) => {
    try {
        var buffer = new Buffer(hex, 'hex');
        return buffer.toString('base64');
    }
    catch(err) {
        error(err);
    }
}

/**
 * Convert Ascii to hex
 * @param {String} ascii
 */
const asciitoHex = (ascii) => {
    try {
        var buffer = new Buffer(ascii, 'ascii');
        return buffer.toString('hex');
    }
    catch(err) {
        error(err);
    }
}

/**
 * Convert ascii to UTF-8
 * @param {String} ascii
 */
const asciitoUTF8 = (ascii) => {
    try {
        var buffer = new Buffer(ascii, 'ascii');
        return buffer.toString('utf8');
    }
    catch(err) {
        error(err);
    }
}

/**
 * Convert Base64 to UTF 16 Little Endian
 * @param {String} ascii
 */
const asciitoUTF16LE = (ascii) => {
    try {
        var buffer = new Buffer(ascii, 'ascii');
        return buffer.toString('utf16le');
    }
    catch(err) {
        error(err);
    }
}

/**
 * Convert hex to Base 64
 * @param {String} ascii
 */
const asciitoB64 = (ascii) => {
    try {
        var buffer = new Buffer(ascii, 'ascii');
        return buffer.toString('base64');
    }
    catch(err) {
        error(err);
    }
}

/**
 * Convert UTF8 to hex
 * @param {String} utf8
 */
const utf8toHex = (utf8) => {
    try {
        var buffer = new Buffer(utf8, 'utf8');
        return buffer.toString('hex');
    }
    catch(err) {
        error(err);
    }
}

/**
 * Convert UTF8 to Ascii
 * @param {String} utf8
 */
const utf8toAscii = (utf8) => {
    try {
        var buffer = new Buffer(utf8, 'utf8');
        return buffer.toString('ascii');
    }
    catch(err) {
        error(err);
    }
}

/**
 * Convert UTF8 to UTF 16 Little Endian
 * @param {String} utf8
 */
const utf8toUTF16LE = (utf8) => {
    try {
        var buffer = new Buffer(utf8, 'utf8');
        return buffer.toString('utf16le');
    }
    catch(err) {
        error(err);
    }
}

/**
 * Convert UTF8 to Base 64
 * @param {String} utf8
 */
const utf8toB64 = (utf8) => {
    try {
        var buffer = new Buffer(utf8, 'utf8');
        return buffer.toString('base64');
    }
    catch(err) {
        error(err);
    }
}

module.exports = {
    b64toAscii,
    b64toUTF8,
    b64toUTF16LE,
    b64toHex,

    hextoAscii,
    hextoUTF8,
    hextoUTF16LE,
    hextoB64,

    asciitoUTF8,
    asciitoUTF16LE,
    asciitoHex,
    asciitoB64,

    utf8toAscii,
    utf8toB64,
    utf8toHex,
    utf8toUTF16LE
}