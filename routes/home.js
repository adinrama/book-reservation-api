const { home } = require("../handlers/home");

const routes = {
  method: "GET",
  path: "/",
  options: {
    handler: home,
  },
};

module.exports = routes;
