const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
  res.send(path.join(__dirname, './public/notes.html'));
});



app.listen(PORT);