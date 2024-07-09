const bookService = require('../service/book-service');
const tokenService = require('../service/token-service');
const { Book } = require('../../db/models');
const ApiError = require('../exceptionsS/api-error');

class BookController {
  async getBooks(req, res, next) {
    try {
      const books = await Book.findAll({
        raw: true,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        order: ['id'],
      });
      return res.json(books);
    } catch (error) {
      console.log(error);
      next(ApiError.BadRequest('Something went wrong'));
    }
  }
  async createBook(req, res, next) {
    try {
      const checkArr = Object.values(req.body);
      checkArr.slice(2).map((el) => {
        if (el === '') throw ApiError.BadRequest('Fill in the blanks');
      });
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
      next(ApiError.BadRequest('Something went wrong'));
    }
  }
  async editeBook(req, res, next) {
    console.log(req.params);
    try {
      const book = await bookService.edite({ ...req.body });
      return res.json(book);
    } catch (error) {
      console.log(error);
      next(ApiError.BadRequest('Something went wrong'));
    }
  }
  async deleteBook(req, res, next) {
    try {
      console.log(req.headers);
      const authHeader = req.headers.authorization;
      const accessToken = authHeader.split(' ')[1];
      const userData = tokenService.validateAccessToken(accessToken);
      const { id } = req.params;
      const data = bookService.delete(userData.id, id);
      return res.json(data.length);
    } catch (error) {
      console.log(error);
      next(ApiError.BadRequest('Something went wrong'));
    }
  }
}
module.exports = new BookController();
