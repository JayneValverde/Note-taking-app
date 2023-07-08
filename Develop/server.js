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

