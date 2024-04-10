const { User, Book } = require('../../db/models');
const ApiError = require('../exceptionsS/api-error');
class BookService {
  async create({ user_id, name, year, genre, author, image }) {
    const book = await Book.findOne({ where: { name } });
    if (book) {
      throw ApiError.BadRequest('Book already exists');
    }
    const newBook = await Book.create({
      user_id,
      name,
      year,
      genre,
      author,
      image,
    });
    return newBook;
  }
  async edite({ id, name, year, author, genre, image }) {
    const book = await Book.findOne({ where: { id: id } });
    book.name = name;
    book.year = year;
    book.author = author;
    book.genre = genre;
    book.image = image;
    await book.save();
    return book;
  }
}
module.exports = new BookService();
