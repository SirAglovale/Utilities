"use strict";

global.log = message => {
  let current_time = new Date();
  current_time = current_time.toISOString();
  if (message instanceof Object) {
    message = JSON.stringify(message);
  }
  process.stdout.write(
    `${global._utils.application.name || "application"}@${global._utils
      .application.version || "version"}[${current_time}] -> ${message}\n`
  );
};

global.error = message => {
  let current_time = new Date();
  current_time = current_time.toISOString();
  if (message instanceof Object) {
    message = JSON.stringify(message);
  }
  process.stderr.write(
    `\x1b[31m${global._utils.application.name || "application"}@${global._utils
      .application.version ||
      "version"}[${current_time}] -> ${message}\x1b[0m\n`
  );
};
