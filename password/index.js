let { createHmac } = require("crypto");
let bcrypt = require("bcryptjs");

/**
 * Hash a password with sha256
 * @param {String} password
 * @param {String} secret
 */
const hashPassword = (password, secret) => {
  let hmac = createHmac("sha256", secret || "");
  let hmac_salt = salt();
  hmac.update(hmac_salt + "#" + password);
  return hmac_salt + "#" + hmac.digest("hex");
};

/**
 * Hash a password with bcrypt
 * @param {String} password
 * @param {Number} [saltRounds=10]
 * @returns {Promise<String>} Represents the hashed password
 */
const hashPasswordWithBcrypt = (password, saltRounds) => {
  const handledSaltRounds = handleBcryptSaltRounds(saltRounds);
  return bcrypt.hash(password, handledSaltRounds);
};

/**
 * Hash a password with bcrypt
 * @param {String} password
 * @param {Number} [saltRounds=10]
 * @returns {String} Hashed password
 */
const hashPasswordWithBcryptSync = (password, saltRounds) => {
  const handledSaltRounds = handleBcryptSaltRounds(saltRounds);
  return bcrypt.hashSync(password, handledSaltRounds);
};

/**
 * Verify a password with a hash
 * @param {String} password
 * @param {String} hash
 * @param {String} secret
 */
const verifyPassword = (password, hash, secret) => {
  let hmac = createHmac("sha256", secret || "");
  try {
    let split = hashSplit(hash);
    hmac.update(split[0] + "#" + password);
    let password_hash = hmac.digest("hex");
    if (password_hash.toString() == split[1].toString()) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    error(err);
  }
};

/**
 * Verify a bcrypt password
 * @param {String} password
 * @param {String} hash
 * @returns {Promise<boolean>} Is match
 */
const verifyBcryptPassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};

/**
 * Verify a bcrypt password
 * @param {String} password
 * @param {String} hash
 * @returns {Boolean} Is match
 */
const verifyBcryptPasswordSync = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

function salt() {
  return s4() + "-" + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function hashSplit(hash) {
  let split_value = hash.split("#");
  if (split_value.length !== 2) {
    throw new Error("That is not a valid hash");
  } else {
    return split_value;
  }
}

function handleBcryptSaltRounds(saltRounds = 10) {
  const saltRoundsType = typeof saltRounds;
  if (saltRoundsType !== "number") {
    throw new Error(
      `Parameter saltRounds must be of type number. The provided parameter is of type - ${saltRoundsType}`
    );
  } else if (saltRounds > 15) {
    log(
      "Be careful with using too many salt rounds. Doing so may dramatically slow down hashing."
    );
  }
  return saltRounds;
}

module.exports = {
  hashPassword,
  hashPasswordWithBcrypt,
  hashPasswordWithBcryptSync,
  verifyPassword,
  verifyBcryptPassword,
  verifyBcryptPasswordSync
};
