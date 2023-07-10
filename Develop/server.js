// TODO: Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const notes = require('./db/db.json');

// Helper method for generating unique id's
// const uuid = require('uuid');

// TODO: Setting up server
const app =  express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: Static Middleware
app.use(express.static('./public'));

// TODO: "GET" request | Populate the saved notes from JSON file 
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./db/db.json"))
});


// TODO: "POST" request | Post new notes to the JSON file when entered and saved 
app.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNotes = req.body;
    // newNotes.id = uuid.v4();
    notes.id = notes.length = +1
    notes.push(newNotes);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes)).then(function(){
        console.log("Notes have been updated");
    })
    res.json(notes);
});


// TODO: "DELETE" request | Bonus request 
app.delete('/api/notes/:id', (req, res) => { 
    // seperate the note to delete based on ID
    const delNote = req.params.id;
    // notes already in json file
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    // sort through notes file and create a new array minus the note in question
    const newNoteData = notes.filter((note) => note.id !== delNote);
    // send array back to the .db class
    fs.writeFileSync('./db/db.json', JSON.stringify(newNoteData));

    res.json(newNoteData)
});

// TODO: HTML Routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// If no matching route is found, default home page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./'public/index.html"));
});


// TODO: Listening 
app.listen(PORT, () => 
    console.log("App listening on PORT " + PORT)
);

