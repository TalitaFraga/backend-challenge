const { response } = require('express');
const fetch = require('node-fetch');
const FileReader = require('filereader');
const imageToBase64 = require('image-to-base64');

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
    .then(async (books) => {
        const isbnNumbers = books.map(book => book.isbn.split("-").join(""))

        let converted = []

        for(const value of isbnNumbers){
            await imageToBase64(`http://covers.openlibrary.org/b/isbn/${value}-M.jpg`)
            .then((response) => converted.push(response))
            .catch(
                (error) => {
                    console.log(error)
                })
        }
    })
}


const getAllCharacters = (req, res) => {
    fetch('https://anapioficeandfire.com/api/characters/')
    .then(response => response.json())
    .then(characters => {
        res.send(characters)
    })
}


const getCharactersById = (req, res) => {
    fetch('https://anapioficeandfire.com/api/characters/' + req.params.id)
    .then(response => response.json())
    .then(character => {
        res.send(character)
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




