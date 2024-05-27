const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Blossom Harmony is Alive!'));

app.listen(port, () => console.log(`Blossom Harmony is listening to http://localhost:${port}`));
