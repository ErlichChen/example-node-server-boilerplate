const Cmd = require('common-bin');
const pkg = require('../package.json');

class Command extends Cmd {
  constructor(rawArgv) {
    super(rawArgv);


  }
}

module.exports = Command;
