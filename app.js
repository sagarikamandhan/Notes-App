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

//create a delete by title command
yargs.command({
  command: 'delete',
  describe: 'Delete the Note by its title',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.DeleteNoteByTitle(argv.title);
  }
});

// create list command

yargs.command({
  command: 'list',
  describe: 'List all the Notes',
  handler() {
    notes.GetAllNotes();
  }
});

//create update command

yargs.command({
  command: 'update',
  describe: 'Update the Note',
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
    notes.UpdateNote(argv.title, argv.body);
  }
});

yargs.parse();
