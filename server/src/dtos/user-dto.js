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
