const router = require('express').Router();
const { readFileSync, readAndAppend } = require('../helpers/file');

// GET Route for retrieving all the notes
router.get('/api/notes', (req, res) => {
  console.info(`${req.method} request received for notes`);
  const data = readFileSync('./db/notes.json', 'utf8');
  res.json(JSON.parse(data));
});

// POST Route for a new UX/UI note
router.post('/api/notes', (req, res) => {
  console.info(`${req.method} request received to add a note`);

  const { title, text} = req.body;

  if (req.body) {
    const newnote = {
      title,
      text,
    };

    readAndAppend(newnote, './db/notes.json');
    res.json(`note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});


module.exports = router;
