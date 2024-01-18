# Book Reservation API

The following steps will guide you through the installation process of Book Reservations API for running locally on your machine:

1. Clone the latest version of this api project from the repository
2. Run `npm install` to install the required Node.js dependencies
3. Run `npm start` or `npm run dev` to start the server
4. Open Postman on your PC to testing the endpoint/path usage

## Resources

There are 2 main resources need in book reservation:

- [Users](https://github.com/adinrama/book-reservation-api/blob/master/handlers/users.js)
- [Books](https://github.com/adinrama/book-reservation-api/blob/master/handlers/books.js)

## How to

You can fetch this data with any kind of tools you know (fetch API, Axios, JQuery Ajax, etc.)

### Get all users

```js
fetch("http://localhost:3001/v1/users")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Get a single user

```js
fetch("http://localhost:3001/v1/users/1")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Register a new user

```js
fetch("http://localhost:3001/v1/users/register", {
  method: "POST",
  body: JSON.stringify({
    name: "Raden Rahmat Wijaya",
    email: "raden.rahmat@dev.id",
    password: "raden_1234$$rahmat",
    gender: "male",
    roles: "user",
    address: "Simbar Kaloka Street, Kalangan, Ngunut, East Java",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Login user

```js
fetch("http://localhost:3001/v1/users/login", {
  method: "POST",
  body: JSON.stringify({
    email: "raden.rahmat@dev.id",
    password: "raden_1234$$rahmat",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Get all books

```js
fetch("http://localhost:3001/v1/books")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Get a single book

```js
fetch("http://localhost:3001/v1/books/1")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Add a new book

```js
fetch("http://localhost:3001/v1/books", {
  method: "POST",
  body: JSON.stringify({
    title: "The Art, Wisdom, and Science of Leading an Extraordinary Life",
    type: "technology",
    author: "Raden Syarif",
    publisher: "Cakrawala Book",
    publish_year: "March 29, 2022",
    page_counts: 256,
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Update a single book

```js
fetch("http://localhost:3001/v1/books/1", {
  method: "PUT",
  body: JSON.stringify({
    title: "The Science of Leading an Extraordinary Life",
    type: "technology",
    author: "Raden Syarif",
    publisher: "Cakrawala Book",
    publish_year: "March 29, 2022",
    page_counts: 256,
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Remove a book

```js
fetch("http://localhost:3001/books/1", {
  method: "DELETE",
});
```

### Sorting books with ascending order by title

```js
fetch("http://localhost:3001/v1/books/sort?sort=asc&by=title")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Sorting books with ascending order by author

```js
fetch("http://localhost:3001/v1/books/sort?sort=asc&by=author")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Sorting books with descending order by title

```js
fetch("http://localhost:3001/v1/books/sort?sort=desc&by=title")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Sorting books with descending order by author

```js
fetch("http://localhost:3001/v1/books/sort?sort=desc&by=author")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

<!-- - Sorting Books with Ascending Order by Title : Method `GET`

  - /v1/books/sort?{sort=asc&by=title}

- Sorting Books with Descending Order by Title : Method `GET`

  - /v1/books/sort?{sort=desc&by=title}

- Sorting Books with Ascending Order by Author : Method `GET`

  - /v1/books/sort?{sort=asc&by=author}

- Sorting Books with Descending Order by Title : Method `GET`

  - /v1/books/sort?{sort=desc&by=author} -->
