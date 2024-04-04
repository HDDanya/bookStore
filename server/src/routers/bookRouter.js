const Router = require('express').Router;
const bookController = require('../controllers/bookController.js');
const router = new Router();
const authMiddleware = require('../middlewares/authMiddleware.js');
router.get('/book/get', bookController.getBooks);
router.post('/book/create', authMiddleware, bookController.create);
router.put('/book/edite/:id', authMiddleware, bookController.edit);
router.post('/book/delete/:id', authMiddleware, bookController.delete);

module.exports = router;
