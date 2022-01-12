const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send('OK');
})

app.get('/status', (req, res) => {
    res.status(200).send('OK');
})

app.get('/language', (req, res) => {
    res.status(200).send('NodeJS Express');
})

app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
})