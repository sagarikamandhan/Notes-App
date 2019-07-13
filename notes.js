const fs = require('fs');
const chalk = require('chalk');

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

module.exports = {
  AddNote: addNote
};