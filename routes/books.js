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
    options: {
      handler: getAllBooks,
    },
  },
  {
    method: "GET",
    path: "/v1/books/{id}",
    options: {
      handler: getBookById,
    },
  },
  {
    method: "POST",
    path: "/v1/books",
    options: {
      handler: addNewBook,
    },
  },
  {
    method: "PUT",
    path: "/v1/books/{id}",
    options: {
      handler: updateBookById,
    },
  },
  {
    method: "DELETE",
    path: "/v1/books/{id}",
    options: {
      handler: deleteBookById,
    },
  },
];

module.exports = routes;
