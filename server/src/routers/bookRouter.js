const Router = require('express').Router;
const bookController = require('../controllers/bookController.js');
const router = new Router();
const authMiddleware = require('../middlewares/authMiddleware.js');
router.get('/book/get', bookController.getBooks);
router.post('/book/create', authMiddleware, bookController.createBook);
router.put('/book/edite/:id', authMiddleware, bookController.editeBook);
router.post('/book/delete/:id', authMiddleware, bookController.deleteBook);
// router.post('/book/basket/:id', authMiddleware, bookController.addToBasket);
// router.get('/user/basket', authMiddleware, bookController.getBasket);

module.exports = router;
