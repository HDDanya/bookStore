const Router = require('express').Router;
const userController = require('../controllers/userController.js');
const router = new Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware.js');

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 28 }),
  userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

module.exports = router;
