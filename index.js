"use strict";

const Hapi = require("@hapi/hapi");
require("dotenv").config();

const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
const Pack = require("./package");

const userRoutes = require("./routes/users");
const bookRoutes = require("./routes/books");

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
  });

  const swaggerOptions = {
    info: {
      title: "Book Reservations API Documentation",
      version: Pack.version,
    },
    tags: [
      {
        name: "users",
        description: "Users data",
      },
      {
        name: "books",
        description: "Books data",
      },
    ],
    grouping: "tags",
  };

  // Adding plugins for hapi-swagger docs
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  server.route(userRoutes);
  server.route(bookRoutes);

  await server.start();
  console.log(`Server is running on ${server.info.uri}`);
  console.log(`Documentation is running on ${server.info.uri}/documentation`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
