const bookService = require('../service/book-service');
const tokenService = require('../service/token-service');
const { Book } = require('../../db/models');
const ApiError = require('../exceptionsS/api-error');
const { body } = require('express-validator');
class BookController {
  async getBooks(req, res, next) {
    try {
      const books = await Book.findAll({ raw: true });
      return res.json(books);
    } catch (error) {
      console.log(error);
      next(ApiError.BadRequest('что то пошло не так'));
    }
  }
  async create(req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      const accessToken = authHeader.split(' ')[1];
      const userData = tokenService.validateAccessToken(accessToken);
      const book = await bookService.create({
        ...req.body,
        user_id: userData.id,
      });

      return res.json(book);
    } catch (error) {
      console.log(error);
      next(ApiError.BadRequest('что то пошло не так'));
    }
  }
  async edit(req, res, next) {
    try {
      const book = await bookService.edite({ ...req.body });
      return res.json(book);
    } catch (error) {
      console.log(error);
      next(ApiError.BadRequest('что то пошло не так'));
    }
  }
  async delete(req, res, next) {
    const { id } = req.body;
    const book = await Book.findOne({ where: { id: id } });
    await book.destroy();
    return res.json(book)
  }
}
module.exports = new BookController();
