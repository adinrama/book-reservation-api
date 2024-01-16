const books = require("../utils/books");

const getAllBooks = (request, h) => {
  return h
    .response({
      status: "Success",
      books,
    })
    .code(200);
};

const getBookById = (request, h) => {
  const { id } = request.params;

  try {
    for (i = 0; i < books.length; i++) {
      if (books[i].id == id) {
        return h
          .response({
            message: `Book with id ${id} successfully found`,
            status: "Success",
            book: books[i],
          })
          .code(200);
      }
    }

    return h
      .response({
        message: `Book with id ${id} not found`,
        status: "Failed",
      })
      .code(404);
  } catch (err) {
    return h
      .response({
        message: `Can't find book with id ${id}`,
        status: "Failed",
        error: err.message,
      })
      .code(500);
  }
};

const addNewBook = (request, h) => {
  const { title, type, author, publisher, publish_year, page_counts } =
    request.payload;

  for (i = 0; i < books.length; i++) {
    if (books[i].title == title) {
      return h
        .response({
          message: "Book already exist",
          status: "Failed",
        })
        .code(400);
    }
  }

  const id = books[books.length - 1].id + 1;
  const newBook = {
    id,
    title,
    type,
    author,
    publisher,
    publish_year,
    page_counts,
  };
  books.push(newBook);

  try {
    const isSuccess = books.filter((book) => book.id === id).length > 0;

    if (isSuccess) {
      return h
        .response({
          message: "Successfully add book data",
          status: "Success",
          newBook,
        })
        .code(201);
    }
  } catch (err) {
    return h
      .response({
        message: "Failed add book data",
        status: "Failed",
        error: err.message,
      })
      .code(500);
  }
};

const updateBookById = (request, h) => {
  const { id } = request.params;

  try {
    for (i = 0; i < books.length; i++) {
      if (books[i].id == id) {
        const { title, type, author, publisher, publish_year, page_counts } =
          request.payload;

        books[i] = {
          id,
          title,
          type,
          author,
          publisher,
          publish_year,
          page_counts,
        };

        return h
          .response({
            message: `Book with id ${id} successfully updated`,
            status: "Success",
            ...books[i],
          })
          .code(201);
      }
    }

    return h
      .response({
        message: `Book with id ${id} not found`,
        status: "Failed",
      })
      .code(404);
  } catch (err) {
    return h
      .response({
        message: `Can't update book with id ${id}`,
        status: "Failed",
        error: err.message,
      })
      .code(500);
  }
};

const deleteBookById = (request, h) => {
  const { id } = request.params;

  try {
    for (i = 0; i < books.length; i++) {
      if (books[i].id == id) {
        books.splice(i, 1);

        return h
          .response({
            message: `Successfully remove remove book with id ${id}`,
            status: "Success",
          })
          .code(200);
      }
    }

    return h
      .response({
        message: `Book with id ${id} not found`,
        status: "Failed",
      })
      .code(404);
  } catch (err) {
    return h
      .response({
        message: `Can't remove book with id ${id}`,
        status: "Failed",
        error: err.message,
      })
      .code(500);
  }
};

const sorting = (request, h) => {
  const { sort, by } = request.query;

  const sortByDescending = (bookArray, property) => {
    const n = bookArray.length;

    for (i = 0; i < n - 1; i++) {
      for (j = 0; j < n - 1 - i; j++) {
        if (bookArray[j][property] < bookArray[j + 1][property]) {
          const temp = bookArray[j];
          bookArray[j] = bookArray[j + 1];
          bookArray[j + 1] = temp;
        }
      }
    }

    return bookArray;
  };

  const sortByAscending = (bookArray, property) => {
    const n = bookArray.length;

    for (i = 0; i < n - 1; i++) {
      for (j = 0; j < n - 1 - i; j++) {
        if (bookArray[j][property] > bookArray[j + 1][property]) {
          const temp = bookArray[j];
          bookArray[j] = bookArray[j + 1];
          bookArray[j + 1] = temp;
        }
      }
    }

    return bookArray;
  };

  try {
    if (sort === "desc".toLowerCase() && by === "title".toLowerCase()) {
      return h
        .response({
          message: "Successfully sorting books with descending order by title",
          status: "Success",
          book: sortByDescending([...books], "title"),
        })
        .code(200);
    }

    if (sort === "asc".toLowerCase() && by === "title".toLowerCase()) {
      return h
        .response({
          message: "Successfully sorting books with ascending order by title",
          status: "Success",
          book: sortByAscending([...books], "title"),
        })
        .code(200);
    }

    if (sort === "desc".toLowerCase() && by === "author".toLowerCase()) {
      return h
        .response({
          message: "Successfully sorting books with descending order by author",
          status: "Success",
          book: sortByDescending([...books], "author"),
        })
        .code(200);
    }

    if (sort === "asc".toLowerCase() && by === "author".toLowerCase()) {
      return h
        .response({
          message: "Successfully sorting books with ascending order by author",
          status: "Success",
          book: sortByAscending([...books], "author"),
        })
        .code(200);
    }

    return h
      .response({
        message: "Query is wrong",
        status: "Failed",
      })
      .code(404);
  } catch (err) {
    return h
      .response({
        message: `Can't find book with id ${id}`,
        status: "Failed",
        error: err.message,
      })
      .code(500);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBookById,
  deleteBookById,
  sorting,
};
