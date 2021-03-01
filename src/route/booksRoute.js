const express =  require('express');

const router = express.Router();
const controller = require('../controller/booksController')

router.get("/", controller.getAll)
router.get("/povCharacters", controller.getpovCharacters)
router.get("/bookCovers", controller.getAllBookCovers)

module.exports = router;