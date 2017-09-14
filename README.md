# UTILITIES

A set of application utilities that will come in useful in Node.js

## Install

```bash
npm install @siraglovale/utils
```

## Usage

This module should be imported into your entry point, this will then setup global functions that can be used within your project.

### setApplication(\_application\_)
Sets the application specific information within the node project
* \_application\_: \<Object\>
    * name: \<string\>
    * version: \<string\>

### log(\_message\_)
Log to stdout a message with a timestamp and information about the application
* \_message\_: \<any\>

### error(\_message\_)
Log to stderr a message with a timestamp and information about the application
* \_message\_: \<any\>

## Full Example
```javascript
require("@siraglovale/utils"); // require module

setApplication({
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