"use strict";

const Hapi = require("@hapi/hapi");
require("dotenv").config();

const userRoutes = require("./routes/users");

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
  });

  server.route(userRoutes);

  await server.start();
  console.log(`Server is running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
