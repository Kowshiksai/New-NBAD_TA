const express = require('express');
const app = express();

app.get('/random-number', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ number: randomNumber });
});

app.listen(3000, () => {
  console.log('Backend server running on http://localhost:3000');
});
