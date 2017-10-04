# UTILITIES

A set of application utilities that will come in useful in Node.js

## Install

```bash
npm install @siraglovale/utils
```

## Usage

This module should be imported into your entry point, this will then setup global functions that can be used within your project.

### Application Functions

#### utils.setApplication(\_application\_)
Sets the application specific information within the node project
* \_application\_: \<Object\>
    * name: \<string\>
    * version: \<string\>

### Global Functions

#### log(\_message\_)
Log to stdout a message with a timestamp and information about the application
* \_message\_: \<any\>

#### error(\_message\_)
Log to stderr a message with a timestamp and information about the application
* \_message\_: \<any\>

### Encoding Functions

#### utils.asciitoB64(\_ascii\_)
Converts an ascii string to a base64 string
* \_ascii\_: \<string\>

#### utils.asciitoHex(\_ascii\_)
Converts an ascii string to a hex string
* \_ascii\_: \<string\>

#### utils.asciitoUTF8(\_ascii\_)
Converts an ascii string to a utf-8 string
* \_ascii\_: \<string\>

#### utils.b64toUTF16LE(\_ascii\_)
Converts an ascii string to a utf-16 little endian string
* \_ascii\_: \<string\>

#### utils.b64toAscii(\_base64\_)
Converts a base64 string to an ascii string
* \_base64\_: \<string\>

#### utils.b64toHex(\_base64\_)
Converts a base64 string to a hex string
* \_base64\_: \<string\>

#### utils.b64toUTF8(\_base64\_)
Converts a base64 string to a utf-8 string
* \_base64\_: \<string\>

#### utils.b64toUTF16LE(\_base64\_)
Converts a base64 string to a utf-16 little endian string
* \_base64\_: \<string\>

#### utils.hextoAscii(\_hex\_)
Converts a hex string to an ascii string
* \_hex\_: \<string\>

#### utils.hextoB64(\_hex\_)
Converts a hex string to a base64 string
* \_hex\_: \<string\>

#### utils.hextoUTF8(\_hex\_)
Converts a hex string to a utf-8 string
* \_hex\_: \<string\>

#### utils.hextoUTF16LE(\_hex\_)
Converts a hex string to a utf-16 little endian string
* \_hex\_: \<string\>

#### utils.utf8toAscii(\_utf8\_)
Converts a utf8 string to an ascii string
* \_utf8\_: \<string\>

#### utils.utf8toB64(\_utf8\_)
Converts a utf8 string to a base64 string
* \_utf8\_: \<string\>

#### utils.utf8toHex(\_utf8\_)
Converts a utf8 string to a hex string
* \_utf8\_: \<string\>

#### utils.utf8toUTF16LE(\_utf8\_)
Converts a utf8 string to a utf-16 little endian string
* \_utf8\_: \<string\>

### Password Functions

#### utils.hashPassword(password, secret)
Hash your password with a pseudo-randomly generated salt.
* password: \<string\>
* secret: \<string\> CONSTANT

#### utils.hashPasswordWithBcrypt(password, saltRounds)
Hash a password with bcrypt
* password: \<string\>
* saltRounds: \<number\>

#### utils.hashPasswordWithBcryptSync(password, saltRounds)
Hash a password with bcrypt synchronously
* password: \<string\>
* saltRounds: \<number\>

#### utils.validatePassword(password, hash, secret)
Validate a submitted password against a hash stored in your database
* password: \<string\>
* hash: \<string\>
* secret: \<string\> CONSTANT

#### utils.verifyBcryptPassword(password, hash)
Validates a bcrypt password
* password: \<string\>
* hash: \<string\>

#### utils.verifyBcryptPasswordSync(password, hash)
Validates a bcrypt password synchronously
* password: \<string\>
* hash: \<string\>

### 2 Factor Authentication Functions

#### utils.genSecret(_email)
Generate a secret for use in 2 Factor Authentication, this is used to generate the TOTP
* _email: \<string\>

#### utils.genQR(_email, _secret)
Generate a QR Code for the user based of the secret generated using genSecret, to use in conjunction with Google Authenticator, Authy or similar
* _email: \<string\>
* _secret: \<string\>

#### utils.verifyTFA(_token, _secret)
Returns an object that the token relates to, and, verifies the user
* _token: \<string\>
* _secret: \<string\>

### Demo

#### Example
```javascript
let utils = require("@siraglovale/utils"); // require module

utils.setApplication({
    name: "application_1",
    version: "0.1.0"
});

log('Hello World!'); 
// stdout
// application_1@0.1.0[Thu Sep 14 2017 22:41:48 GMT+0100 (GMT Summer Time)] -> Hello World!

error('error')
// stderr
// application_1@0.1.0[Thu Sep 14 2017 22:41:48 GMT+0100 (GMT Summer Time)] -> error
```