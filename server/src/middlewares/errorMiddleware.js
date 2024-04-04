const ApiError = require('../exceptionsS/api-error');
module.exports = function (err, req, res, next) {
  console.log(err);
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ messege: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: 'Неизвестная ошибка' });
};
