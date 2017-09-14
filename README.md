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