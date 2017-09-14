global.log = (eval) => {
    let current_time = new Date();
    if(eval instanceof Object) {
        eval = JSON.stringify(eval);
    }
    process.stdout.write(`${global._utils.application.name || 'application'}@${global._utils.application.version || 'version'}[${current_time}] -> ${eval}\n`);
}

global.error = (eval) => {
    let current_time = new Date();
    if(eval instanceof Object) {
        eval = JSON.stringify(eval);
    }
    process.stderr.write(`${global._utils.application.name || 'application'}@${global._utils.application.version || 'version'}[${current_time}] -> ${eval}\n`);
}