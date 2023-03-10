const express = require('express');
const apiRoutes = require('./routes/api');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(apiRoutes);

// send index file to / path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// send notes file to /notes path
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT);
