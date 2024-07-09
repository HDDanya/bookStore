const { Basket, Book } = require('../../db/models');
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
  async edite(props) {
    const book = await Book.findOne({ where: { id: props.id } });
    book.name = props.name;
    book.year = props.year;
    book.author = props.author;
    book.genre = props.genre;
    book.image = props.image;
    await book.save();

    return book;
  }
  async delete(user_id, book_id) {
    const book = await Book.findOne({ where: { id: book_id } });
    await book.destroy();
    const userBasket = await Basket.findAll({ raw: true, where: { user_id } });
    return userBasket;
  }
}
module.exports = new BookService();
