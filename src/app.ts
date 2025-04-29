import express from 'express';
const app = express();
const port = 8087;

app.get('/', (req, res) => {
  res.send('Launching Soon..........................!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

//ddbedk