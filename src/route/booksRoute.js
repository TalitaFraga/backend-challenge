const express =  require('express');

const router = express.Router();
const controller = require('../controller/booksController');

router.get("/povCharacters", controller.getpovCharacters);
router.get("/bookCovers", controller.getAllBookCovers);
router.get("/characters", controller.getAllCharacters);
router.get("/search_character/:id", controller.getCharactersById );
router.get("/search_books/:id", controller.getBooksByCharacter);

module.exports = router;