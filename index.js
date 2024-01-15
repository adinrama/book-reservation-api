require("dotenv").config();
const Hapi = require("@hapi/hapi");
const HapiCors = require("hapi-cors");
const HapiJwt = require("hapi-auth-jwt2");
const validate = require("./auth/validate");

const userRoutes = require("./routes/users");
const bookRoutes = require("./routes/books");

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
  });

  // CORS handling
  await server.register({
    plugin: HapiCors,
    options: {
      origins: ["*"],
    },
  });

  await server.register(HapiJwt);
  server.auth.strategy("jwt", "jwt", {
    key: process.env.SECRET_KEY,
    validate,
  });

  server.route(userRoutes);
  server.route(bookRoutes);

  await server.start();
  console.log(`Server is running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
