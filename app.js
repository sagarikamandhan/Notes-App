const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');
//

//create a add command
yargs.command({
  command: 'add',
  describe: 'Add a Note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note Description',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.AddNote(argv.title, argv.body);
  }
});

yargs.parse();
