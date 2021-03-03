# backend-challenge

## API das Crônicas do Gelo e Fogo

- Essa API consome dados de uma outra API que pode ser acessada pelo link:  https://anapioficeandfire.com/api/books/

### Tecnologias usadas:
- Node.js
- JavaScript

### Dependências utilizadas no projeto:

- express
- nodemon
- filereader
- node-fetch

## Books:

### Rotas:

### Rota de povCharacters:

Nessa rota todos os personagens que tem point of view nos livros são retornados.

``` 
 - http://localhost:8080/povCharacters

{
        "url": "https://www.anapioficeandfire.com/api/characters/148",
        "name": "Arya Stark",
        "gender": "Female",
        "culture": "Northmen",
        "born": "In 289 AC, at Winterfell",
        "died": "",
        "titles": [
            "Princess"
        ],
        "aliases": [
            "Arya Horseface",
            "Arya Underfoot",
            "Arry",
            "Lumpyface",
            "Lumpyhead",
            "Stickboy",
            "Weasel",
            "Nymeria",
            "Squan",
            "Saltb",
            "Cat of the Canaly",
            "Bets",
            "The Blind Girh",
            "The Ugly Little Girl",
            "Mercedenl",
            "Mercye"
        ],
        "father": "",
        "mother": "",
        "spouse": "",
        "allegiances": [
            "https://www.anapioficeandfire.com/api/houses/362"
        ],
        "books": [],
        "povBooks": [
            "https://www.anapioficeandfire.com/api/books/1",
            "https://www.anapioficeandfire.com/api/books/2",
            "https://www.anapioficeandfire.com/api/books/3",
            "https://www.anapioficeandfire.com/api/books/5",
            "https://www.anapioficeandfire.com/api/books/8"
        ],
        "tvSeries": [
            "Season 1",
            "Season 2",
            "Season 3",
            "Season 4",
            "Season 5",
            "Season 6"
        ],
        "playedBy": [
            "Maisie Williams"
        ]
    }
```

### Rota das Capas dos Livros:

Nessa rota teremos as capas de todos os livros.

```
 - http://localhost:8080/booksCovers

[ 
    '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAERALQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8z7WZBbAMypICMjngdua1beBRkMIx6g+lZmWFuFZFQBMgsPm+v05q7bQ3t5p07wWk91HCBvlgiaTywOmSoIUj1NZs8acHN+6Z+oKVnbqQSWDYxnp/LpVZFBLls5IzkHgVdeSa7ROJJtuAGSMkjjjoKgaJo2AkVoyD91hhvpzTN43UUmRMo4yMMfT0qeyhEsijYXz/... 
]
```

### Rota de todos os Personagens: 

Nessa rota teremos todos os personagens de todos os livros.

```
 - http://localhost:8080/characters

{
        "url": "https://anapioficeandfire.com/api/books/1",
        "name": "A Game of Thrones",
        "isbn": "978-0553103540",
        "authors": [
            "George R. R. Martin"
        ],
        "numberOfPages": 694,
        "publisher": "Bantam Books",
        "country": "United States",
        "mediaType": "Hardcover",
        "released": "1996-08-01T00:00:00",
        "characters": [
            "https://anapioficeandfire.com/api/characters/2",
            "https://anapioficeandfire.com/api/characters/12",
            "https://anapioficeandfire.com/api/characters/13"
        ],
        "povCharacters": [
            "https://anapioficeandfire.com/api/characters/148",
            "https://anapioficeandfire.com/api/characters/208",
            "https://anapioficeandfire.com/api/characters/232"
        ]
}

```

### Rota de um personagem:

Nessa rota usaremos o id na requisição e teremos como retorno o persogem que contem esse id.

```

 - http://localhost:8080/search_character/:id

{
    "url": "https://www.anapioficeandfire.com/api/characters/2",
    "name": "Walder",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
        ""
    ],
    "aliases": [
        "Hodor"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
        "https://www.anapioficeandfire.com/api/houses/362"
    ],
    "books": [
        "https://www.anapioficeandfire.com/api/books/1",
        "https://www.anapioficeandfire.com/api/books/2",
        "https://www.anapioficeandfire.com/api/books/3",
        "https://www.anapioficeandfire.com/api/books/5",
        "https://www.anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
        "Season 1",
        "Season 2",
        "Season 3",
        "Season 4",
        "Season 6"
    ],
    "playedBy": [
        "Kristian Nairn"
    ]
}

```

### Rotas de livros:

Nessa rota passaremos o id na requisição e teremos como retorno todos os livros que esse personagem faz parte.

```

 - http://localhost:8080/search_books/:id

[
    {
        "url": "https://anapioficeandfire.com/api/books/2",
        "name": "A Clash of Kings",
        "isbn": "978-0553108033",
        "authors": [
            "George R. R. Martin"
        ],
        "numberOfPages": 768,
        "publisher": "Bantam Books",
        "country": "United States",
        "mediaType": "Hardback",
        "released": "1999-02-02T00:00:00",
        "characters": [
            "https://anapioficeandfire.com/api/characters/2",
            "https://anapioficeandfire.com/api/characters/12",
             "https://anapioficeandfire.com/api/characters/2126"
        ],
        "povCharacters": [
            "https://anapioficeandfire.com/api/characters/148",
            "https://anapioficeandfire.com/api/characters/208"
        ]
    }

```






