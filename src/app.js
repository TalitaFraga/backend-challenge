const express = require('express');
const app = express();

const books = require('./route/booksRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', books)

module.exports = app;