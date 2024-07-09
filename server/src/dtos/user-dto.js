module.exports = class UserDto {
  email;
  id;
  isActivated;

  constructor(model) {
    this.email = model.name;
    this.id = model.id;
    this.isActivated = model.isActivated;
  }
};
module.exports = class BookDto {
  id;
  user_id;
  name;
  author;
  year;
  genre;
  image;

  constructor(model) {
    this.id = model.id;
    this.user_id = model.user_id;
    this.name = model.name;
    this.author = model.author;
    this.year = model.year;
    this.genre = model.genre;
    this.image = model.image;
  }
};
