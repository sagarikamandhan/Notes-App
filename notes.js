const fs = require('fs');
const chalk = require('chalk');
const ctable = require('console.table');

const loadNotes = () => {
  try {
    //fs.readFileSync return the data in buffer i.e in binary
    //convert it into string
    //then parse it into json
    const notesBuffer = fs.readFileSync('notes.json');
    const notesString = notesBuffer.toString();
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesJSON);
};

//Add a Note
const addNote = (title, body) => {
  //loadNotes return the array of notes.
  //push the note into the array
  const notes = loadNotes();
  const isDuplicateTitle = notes.find(note => note.title === title);
  if (!isDuplicateTitle) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log(chalk.green('New Note is added'));
  } else {
    console.log(chalk.red('Duplicate Title can not be added'));
  }
};

//Delete Note By Title
const deleteNoteByTitle = title => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => note.title != title);
  //Note Exists
  if (filteredNotes < notes) {
    saveNotes(filteredNotes);
    console.log(chalk.green.inverse('Note is Deleted'));
  } //Note doesn't exist
  else if (filteredNotes.length === notes.length) {
    console.log(chalk.red.inverse('No Note Found!'));
  }
};

// List all the Notes
const getAllNotes = () => {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.table(notes);
  } else {
    console.log(chalk.red('Empty List'));
  }
};

const updateNote = (title, body) => {
  debugger;
  const notes = loadNotes();
  const noteIndex = notes.findIndex(note => note.title == title);
  if (noteIndex > -1) {
    notes[noteIndex].body = body;
    saveNotes(notes);
    console.log(chalk.green.inverse('Note is Updated'));
  } //Note doesn't exist
  else {
    console.log(chalk.red('Note not found!'));
  }
};

module.exports = {
  AddNote: addNote,
  DeleteNoteByTitle: deleteNoteByTitle,
  GetAllNotes: getAllNotes,
  UpdateNote: updateNote
};
