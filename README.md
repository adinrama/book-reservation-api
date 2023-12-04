# Books Reservation API

The following steps will guide you through the installation process of Books Reservation API for running in a development environment locally on your machine:

1. Clone the latest version of this api project from the repository
2. Run `npm install pnpm` to install the package manager
3. Run `pnpm install` to install the required Node.js dependencies
4. Run `pnpm start` or `pnpm dev` to start the server
5. Open your browser and go to `http://127.0.0.1:3001/book-reservation-api-docs` to view the documentation from this api (dev stage)

### Path Usage

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
