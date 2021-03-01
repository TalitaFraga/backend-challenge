const { response } = require('express');
const fetch = require('node-fetch');
const FileReader = require('filereader')
const books = require("../model/iceAndFire");


const getAll = (req, res) => {
    console.log(req.url)


    res.send(books)
};

const getpovCharacters = (req, res) => {
    fetch('https://anapioficeandfire.com/api/books/')
    .then(response => response.json())
    .then(books => {

        const povCharactersLinks = books.flatMap(book => book.povCharacters )
        const povCharactersUnique = [...new Set(povCharactersLinks)]

        const promises = povCharactersUnique.map(url => fetch(url).then(response => response.json()))
        Promise.all(promises).then(responses => res.send(responses))
    })

}

const getAllBookCovers = (req, res) => {
    fetch('https://anapioficeandfire.com/api/books/')
    .then(response => response.json())
    .then(books => {

        const isbnNumbers = books.map(book => book.isbn.split("-").join(""))


        const promises = isbnNumbers.map(value => fetch(`http://covers.openlibrary.org/a/isbn/${value}-M.jpg`).then(response => response.blob()).then(convertBlobToBase64))
        Promise.all(promises).then(responses => res.send(responses))

    })

    const convertBlobToBase64 = blob => new Promise((resolve, reject) => {
        const reader = new FileReader;
        reader.onerror = reject;
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsDataURL(blob);
    });
    

} 

module.exports = { getAll, getpovCharacters, getAllBookCovers };
