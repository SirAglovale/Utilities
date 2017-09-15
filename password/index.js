let { createHmac } = require("crypto")

/**
 * Hash a password with sha256
 * @param {String} password
 * @param {String} secret
 */
const hashPassword = (password, secret) => {
    let hmac = createHmac('sha256', (secret || ''));
    let hmac_salt = salt();
    hmac.update(hmac_salt + '#' + password);
    return hmac_salt + '#' + hmac.digest('hex');
};

/**
 * Verify a password with a hash
 * @param {String} password 
 * @param {String} hash 
 * @param {String} secret 
 */
const verifyPassword = (password, hash, secret) => {
    let hmac = createHmac('sha256', (secret || ''));
    try {
        let split = hashSplit(hash);
        hmac.update(split[0] + '#' + password);
        let password_hash = hmac.digest('hex');
        if(password_hash.toString() == split[1].toString()) {
            return true;
        }
        else {
            return false;
        }
    }
    catch(err) {
        error(err);
    }
};

function salt() {
    return s4() + "-" + s4();
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function hashSplit(hash) {
    let split_value = hash.split('#');
    if(split_value.length !== 2) {
        throw new Error("That is not a valid hash");
    }
    else {
        return split_value;
    }
}

module.exports = {
    hashPassword,
    verifyPassword
}