// TODO: Dependencies
const express = require('express');
const fs = requre('fs');
const path = require('path');
const notes = require('./db/db.json');

// Helper method for generating unique id's
const uuid = require('uuid');

// TODO: Setting up server
const app =  express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: Static Middleware
app.use(express.static('./Develop/public'));

// TODO: "GET" request | Populate the saved notes from JSON file 
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'))
});


// TODO: "POST" request | Post new notes to the JSON file when entered and saved 



// TODO: "DELETE" request | Bonus request 



// TODO: HTML Routes



// TODO: Listening 
app.listen(PORT, () => 
    console.log("App listening on PORT " + PORT)
);

