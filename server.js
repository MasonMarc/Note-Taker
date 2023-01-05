const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
const path = require('path');

app.use(express.static('public'));

// send index file to / path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// send notes file to /notes path
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});



app.listen(PORT);