const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'html');

app.use(express.static('Frontend'));

app.get('/', (req, res) => {
    res.render('index');
  });

app.get('/random-number', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ number: randomNumber });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
