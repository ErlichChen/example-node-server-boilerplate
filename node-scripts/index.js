'use strict';

const path = require('path');
const Command = require('./src/command');

class NodeScripts extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.usage = 'Usage: ctl [command] [options]';

    // load directory
    this.load(path.join(__dirname, 'src/cmd'));
  }
}

module.exports = NodeScripts;
// exports.Command = Command;
// exports.StartCommand = require('./src/cmd/start');
// exports.StopCommand = require('./src/cmd/stop');
