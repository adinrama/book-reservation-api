const {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBookById,
  deleteBookById,
} = require("../handlers/books");

const routes = [
  {
    method: "GET",
    path: "/v1/books",
    handler: getAllBooks,
  },
  {
    method: "GET",
    path: "/v1/books/{id}",
    handler: getBookById,
  },
  {
    method: "POST",
    path: "/v1/books",
    handler: addNewBook,
  },
  {
    method: "PUT",
    path: "/v1/books/{id}",
    handler: updateBookById,
  },
  {
    method: "DELETE",
    path: "/v1/books/{id}",
    handler: deleteBookById,
  },
];

module.exports = routes;
