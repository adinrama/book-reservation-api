# Book Reservation API

The following steps will guide you through the installation process of Book Reservations API for running in a development environment locally on your machine:

1. Clone the latest version of this api project from the repository
2. Run `npm install` to install the required Node.js dependencies
3. Run `npm start` or `npm run dev` to start the server
4. Open Postman on your PC or you can use `https://testfully.io` to testing the endpoint/path usage

### Path Usage

- Get All Users : Method `GET`

  - /v1/users

- User Login : Method `POST`

  - /v1/users/login

- User Register : Method `POST`

  - /v1/users/register

- Get All Books : Method `GET`

  - /v1/books

- Get Book By Id : Method `GET`

  - /v1/books/{book id}

- Add New Book : Method `POST`

  - /v1/books

- Update Book By Id : Method `PUT`

  - /v1/books/{book id}

- Remove Book By Id : Method `DELETE`
  - /v1/books/{book id}
