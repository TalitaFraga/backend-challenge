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

```
 - [ ] http://localhost:8080/povCharacters

Todos os personagens de povCharacters serão retornados com essa rota.

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

```
 - [ ] http://localhost:8080/bookCovers

Nessa rota teremos as capas de todos os livros.

 {
        "size": 0,
        "timeout": 0
    }
```

```
 - [ ] http://localhost:8080/characters

Nessa rota teremos todos os personagens como retorno.

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

```

 - [ ] http://localhost:8080/search_character/:id

Essa rota retornará as informações do personagem através Id passado na requisição.

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

```

 - [] http://localhost:8080/search_books/:id

Nessa requisição será retornado os livros que o personagem faz parte. Usamos o id para realizar a pesquisa.

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






