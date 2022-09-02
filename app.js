const express = require('express');
const app = express();
const port = 3000;
const host = '127.0.0.1';

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(port, host, () => {
    console.log(`The express server running on http://${host}:${port}`);
});