const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(path.join(__dirname, './public/index.html'));
});



app.listen(PORT);