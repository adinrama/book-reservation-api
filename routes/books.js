const Joi = require("joi");
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
      description: "Endpoint for get all books",
      notes: "Execute to see the result",
      tags: ["api", "books"],
    },
  },
  {
    method: "GET",
    path: "/v1/books/{id}",
    options: {
      handler: getBookById,
      description: "Endpoint for get book by id",
      notes: "Execute to see the result",
      tags: ["api", "books"],
      validate: {
        params: Joi.object({
          id: Joi.number().required(),
        }),
      },
    },
  },
  {
    method: "POST",
    path: "/v1/books",
    options: {
      handler: addNewBook,
      description: "Endpoint for upload a new book",
      notes:
        "Enter the title, type, author, publisher, publish_year, and page_counts to upload a new book",
      tags: ["api", "books"],
      plugins: {
        "hapi-swagger": {
          payloadType: "form",
        },
      },
      validate: {
        payload: Joi.object({
          title: Joi.string().required(),
          type: Joi.string().required(),
          author: Joi.string().required(),
          publisher: Joi.string().required(),
          publish_year: Joi.string().required(),
          page_counts: Joi.number().required(),
        }),
      },
    },
  },
  {
    method: "PUT",
    path: "/v1/books/{id}",
    options: {
      handler: updateBookById,
      description: "Endpoint for update an existing book",
      notes:
        "Optional enter the title, type, author, publisher, publish_year, and page_counts to upload a new book",
      tags: ["api", "books"],
      plugins: {
        "hapi-swagger": {
          payloadType: "form",
        },
      },
      validate: {
        params: Joi.object({
          id: Joi.number().required(),
        }),
        payload: Joi.object({
          title: Joi.string(),
          type: Joi.string(),
          author: Joi.string(),
          publisher: Joi.string(),
          publish_year: Joi.string(),
          page_counts: Joi.number(),
        }),
      },
    },
  },
  {
    method: "DELETE",
    path: "/v1/books/{id}",
    options: {
      handler: deleteBookById,
      description: "Endpoint for delete book by id",
      notes: "Execute to see the result",
      tags: ["api", "books"],
      validate: {
        params: Joi.object({
          id: Joi.number().required(),
        }),
      },
    },
  },
];

module.exports = routes;
