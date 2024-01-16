module.exports.home = (request, h) => {
  return h
    .response({
      message: "Welcome to Book Reservation API",
      status: "Success",
      says: "Visit https://github.com/adinrama/book-reservation-api to see details",
    })
    .code(200);
};
