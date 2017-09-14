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
```