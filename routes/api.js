const router = require('express').Router();
const uuid = require('../helpers/uuid');
const { readFileSync, readAndAppend } = require('../helpers/file');

router.get('/api/notes', (req, res) => {
  console.info(`${req.method} request received`);
  const data = readFileSync('./db/notes.json', 'utf8');
  res.json(JSON.parse(data));
});

router.post('/api/notes', (req, res) => {
  console.info(`${req.method} add request received`);

  const { title, text} = req.body;

  if (req.body) {
    const newnote = {
      title,
      text,
      id: uuid()
    };

    readAndAppend(newnote, './db/notes.json');
    res.json(`note added`);
  } else {
    res.error('Error');
  }
});


module.exports = router;
