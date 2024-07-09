const bookService = require('../service/book-service');
const tokenService = require('../service/token-service');
const { Basket } = require('../../db/models');
const ApiError = require('../exceptionsS/api-error');
const basketService = require('../service/basket-service');

class BasketController {
  async addToBasket(req, res, next) {
    try {
      const { id } = req.body;
      const authHeader = req.headers.authorization;
      const accessToken = authHeader.split(' ')[1];
      const userData = tokenService.validateAccessToken(accessToken);
      const basket = await basketService.add({
        user_id: userData.id,
        book_id: id,
      });
      return res.json(basket);
    } catch (error) {
      console.log(error);
      next(ApiError.BadRequest('Something went wrong'));
    }
  }
  async getBasket(req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      const accessToken = authHeader.split(' ')[1];
      const userData = tokenService.validateAccessToken(accessToken);

      const userBasket = await Basket.findAll({
        raw: true,
        where: { user_id: userData.id },
      });

      await basketService.get(userBasket, res);
    } catch (error) {
      console.log(error);
      next(ApiError.BadRequest('Something went wrong'));
    }
  }
}
module.exports = new BasketController();
