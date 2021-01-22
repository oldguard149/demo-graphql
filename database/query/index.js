'use strict';
const author = require('./author.query');
const book = require('./book.query');
const genre = require('./genre.query');
const publisher = require('./publisher.query');

module.exports = {
    genre,
    publisher,
    author,
    book,
}