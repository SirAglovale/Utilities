global.log = (eval) => {
    let current_time = new Date();
    current_time = current_time.toISOString();
    if(eval instanceof Object) {
        eval = JSON.stringify(eval);
    }
    process.stdout.write(`${global._utils.application.name || 'application'}@${global._utils.application.version || 'version'}[${current_time}] -> ${eval}\n`);
}

global.error = (eval) => {
    let current_time = new Date();
    current_time = current_time.toISOString();
    if(eval instanceof Object) {
        eval = JSON.stringify(eval);
    }
    process.stderr.write(`\x1b[31m${global._utils.application.name || 'application'}@${global._utils.application.version || 'version'}[${current_time}] -> ${eval}\x1b[0m\n`);
}