const { response } = require('express');
const fetch = require('node-fetch');
const FileReader = require('filereader');

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


        const promises = isbnNumbers.map(value => fetch(`http://covers.openlibrary.org/a/isbn/${value}-M.jpg`))
        Promise.all(promises).then(responses => res.send(responses))
    })
} 


const getAllCharacters = (req, res) => {
    fetch('https://anapioficeandfire.com/api/books/')
    .then(response => response.json())
    .then(books => {

        const charactersLinks = books.flatMap(book => book.characters )
        const charactersUnique = [...new Set(charactersLinks)]

        const promises = charactersUnique.map(url => fetch(url).then(response => response.json()))
        Promise.all(promises).then(responses => res.send(responses))
    })
}


const getCharactersById = (req, res) => {
    fetch('https://anapioficeandfire.com/api/books/')
    .then(response => response.json())
    .then(books => {

        const id = req.params.id
        const bookscharacters = books.flatMap(book => book.characters)
        const booksId = bookscharacters.find(link => link.endsWith('/' + id))

        if(!booksId) {
            res.status(404).send("character does not exist")
        }

        fetch(booksId)
        .then(booksId => booksId.json())
        .then(booksId => res.send(booksId))
    })
}


const getBooksByCharacter = (req, res) => {
    fetch('https://anapioficeandfire.com/api/books/')
    .then(response => response.json())
    .then(books => {

        const id = req.params.id
        const booksCharacters = books.filter(book => book.characters.some(link => link.endsWith('/'+id)))

        if(booksCharacters.length === 0){
            res.status(404).send("character does not exist")
        }
        res.status(200).send(booksCharacters)
    })
}
module.exports = { getpovCharacters, getAllBookCovers, getAllCharacters, getCharactersById, getBooksByCharacter };





// const promises = isbnNumbers.map(value => fetch(`http://covers.openlibrary.org/a/isbn/${value}-M.jpg`).then(response => response.blob()).then(convertBlobToBase64))
// Promise.all(promises).then(responses => res.send(responses))

// const convertBlobToBase64 = blob => new Promise((resolve, reject) => {
//     const reader = new FileReader;
//     reader.onerror = reject;
//     reader.onload = () => {
//         resolve(reader.result);
//     };
//     reader.readAsDataURL(blob);
// });