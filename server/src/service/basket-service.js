const { Basket, Book } = require('../../db/models');

class BasketService {
  async add({ user_id, book_id }) {
    const basket = await Basket.findOne({
      where: { user_id, book_id },
    });
    if (basket) {
      await basket.destroy();
    } else {
      await Basket.create({
        user_id,
        book_id,
      });
    }
    const userBasket = await Basket.findAll({ raw: true, where: { user_id } });
    return userBasket;
  }
  async get(userBasket, res) {
    Promise.all(
      userBasket.map(async (el) => {
        const book = await Book.findOne({
          raw: true,
          where: { id: el.book_id },
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        return book;
      })
    ).then((books) => res.json(books));
  }
}
module.exports = new BasketService();
