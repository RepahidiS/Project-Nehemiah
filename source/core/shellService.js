
module.exports = class ShellService {
constructor(controlservice) {
  this.controller = controlservice
  
}
init() {
    var readline = require('readline');
    var readlinein = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    setTimeout(this.prompt(readlinein), 1);
}


prompt(in_) {
    in_.question(">", function(str) {
        this.parseCommands(str);
        return this.prompt(); // Too lazy to learn async
    });
}

parseCommands(str) {
    controller.logger.onCommand(str);
    if (str === '')
        return;
controller.execCommand
}
}
