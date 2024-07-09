const Router = require('express').Router;
const basketController = require('../controllers/basketController.js');
const router = new Router();
const authMiddleware = require('../middlewares/authMiddleware.js');

router.post('/book/basket/:id', authMiddleware, basketController.addToBasket);
router.get('/user/basket', authMiddleware, basketController.getBasket);

module.exports = router;
